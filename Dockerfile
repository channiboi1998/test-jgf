FROM 706096107052.dkr.ecr.ap-southeast-1.amazonaws.com/jfc-dt-nginx:1.23.4

## copy app
COPY --chown=nginx:nginx build/. /home/nginx/html

## set nginx user
USER nginx
WORKDIR /home/nginx
