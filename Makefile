#
# Makefile for Docker
# zander: 2022-09-22
#

APP_NAME = marketing-jgf/web-app

AWS_REGION = ap-southeast-1
AWS_ARGS =

IMAGE_REPO = 706096107052.dkr.ecr.$(AWS_REGION).amazonaws.com
IMAGE_NAME = $(APP_NAME)
IMAGE_LABEL = $(shell npm pkg get version)
IMAGE_FULL_NAME = $(IMAGE_REPO)/$(IMAGE_NAME)

CONTAINER_NAME = $(subst /,-,$(APP_NAME))
HOST_PORT = 8080
CONT_PORT = 8080
PORT = $(HOST_PORT):$(CONT_PORT)

DOCKER_ARGS = -e "NGINX_ENV=dev"
BUILD_ENV = BROWSER=none


usage:
	@echo "Usage: make [version|build|run|term|start|stop|clean]"

version:
	@if [ -z "$(firstword $(filter-out $@, $(MAKECMDGOALS)))" ]; then echo "Usage: make version [major|minor|patch|<version>]"; exit 1; fi
	@$(eval PKG_VERSION=$(shell npm version $(firstword $(filter-out $@, $(MAKECMDGOALS))) --no-git-tag-version | sed 's/v//'))
	@if [ -z "$(PKG_VERSION)" ]; then exit 1; fi; echo "version: $(PKG_VERSION)"
	@find . -type f -name 'task-definition-*' -exec sed -i '' 's/\("image" *: *".*$(subst /,\/,$(IMAGE_NAME)):\)\([^"]*\)\(.*$$\)/\1${PKG_VERSION}\3/' {} \;

git-init:
	git config include.path "$$PWD/.gitconfig"

login:
	@aws ecr get-login-password --region $(AWS_REGION) $(AWS_ARGS) | docker login --username AWS --password-stdin $(IMAGE_REPO)

logout:
	@docker logout

push:
	docker push $(IMAGE_FULL_NAME):latest
	docker push $(IMAGE_FULL_NAME):$(IMAGE_LABEL)

compile:
	npm install && $(BUILD_ENV) npm run build

build:
	docker build -t $(IMAGE_NAME):latest -t $(IMAGE_FULL_NAME):latest .
	docker tag $(IMAGE_NAME):latest $(IMAGE_NAME):$(IMAGE_LABEL)
	docker tag $(IMAGE_NAME):latest $(IMAGE_FULL_NAME):$(IMAGE_LABEL)

run-term:
	docker run -it --entrypoint /bin/bash $(IMAGE_NAME):latest

run:
	docker run -it --rm --name $(CONTAINER_NAME) -p $(PORT) $(DOCKER_ARGS) $(IMAGE_NAME):latest

start:
	docker run -d --rm --name $(CONTAINER_NAME) -p $(PORT) $(DOCKER_ARGS) $(IMAGE_NAME):latest

stop:
	docker stop `docker ps -q -f "name=$(CONTAINER_NAME)"`

term:
	docker exec -it $(CONTAINER_NAME) /bin/bash

##------------------------------------------------------------------------------
##-- CI commands
ci-compile:
	@npm install && $(BUILD_ENV) npm run build

ci-test:
	@npm install && npm test

ci-build: login
	@docker build -t $(IMAGE_FULL_NAME):$(IMAGE_LABEL) -t $(IMAGE_FULL_NAME):latest .

ci-push: login
	@docker push --all-tags $(IMAGE_FULL_NAME) && make logout

##------------------------------------------------------------------------------

clean:
	docker rmi -f `docker images -f "dangling=true" -q`


silent:
	@:

%: silent
	@:

.PHONY: silent version git-init login logout push compile build run run-term start stop term clean ci-compile ci-test ci-build ci-push
