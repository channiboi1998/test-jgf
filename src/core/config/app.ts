import { AppConfig } from '../../shared/models/app-config';
export const APP_CONFIG: AppConfig = {
  link: {
    jfc: 'https://jollibeegroup.com/',
    jgf: 'https://foundation.jollibeegroup.com',
    fb: 'https://www.facebook.com/JollibeeGroupFoundationInc/',
    yt: 'https://www.youtube.com/channel/UCapz0RoCQkS1se7LupIOc-Q',
    pp: 'https://privacy.jfc.com.ph/'
  },
  email: {
    jgf: 'foundation@jollibee.com.ph'
  },
  phone: {
    jgf: '(02)8688-7133'
  },
  navItems: [
    {
      id: 'ar-2022',
      name: 'nav.home',
      path: '/',
      external: false
    },
    {
      id: 'about-us',
      name: 'nav.aboutUs',
      path: '/#about-us',
      external: false
    },
    {
      id: 'theme',
      name: 'nav.themeDiscussion',
      path: '/#theme',
      external: false
    },
    {
      id: 'farmer-entrepreneurship-program',
      name: 'nav.agriculture',
      path: '/#farmer-entrepreneurship-program',
      external: false
    },
    {
      id: 'food-aid',
      name: 'nav.disasterResponse',
      path: '/#food-aid',
      external: false
    },
    {
      id: 'ace-scholarship-program',
      name: 'nav.education',
      path: '/#ace-scholarship-program',
      external: false
    },
    {
      id: 'mangrove',
      name: 'nav.mangrove',
      path: '/#mangrove',
      external: false
    },
    {
      id: 'previous-accomplishment-reports',
      name: 'nav.accomplishmentReports',
      path: '/#accomplishment-reports',
      external: false
    }
  ],
  annualReports: [
    {
      id: 1,
      year: 2005,
      thumbnail: '/images/reports/10th-commemorative-book-thumbnail.webp',
      title: 'report.commemorativeBook.title',
      description: 'report.commemorativeBook.description',
      link: '/docs/10th Year Commemorative Book.pdf'
    },
    {
      id: 2,
      year: 2016,
      thumbnail: '/images/reports/ar-2016-thumbnail.webp',
      title: 'report.2016.title',
      link: '/docs/2016 Accomplishment Report.pdf'
    },
    {
      id: 3,
      year: 2017,
      thumbnail: '/images/reports/ar-2017-thumbnail.webp',
      title: 'report.2017.title',
      link: '/docs/2017 Accomplishment Report.pdf'
    },
    {
      id: 4,
      year: 2018,
      thumbnail: '/images/reports/ar-2018-thumbnail.webp',
      title: 'report.2018.title',
      link: '/docs/2018 Accomplishment Report.pdf'
    },
    {
      id: 5,
      year: 2019,
      thumbnail: '/images/reports/ar-2019-thumbnail.webp',
      title: 'report.2019.title',
      link: '/docs/2019 Accomplishment Report.pdf'
    },
    {
      id: 6,
      year: 2020,
      thumbnail: '/images/reports/ar-2020-thumbnail.webp',
      title: 'report.2020.title',
      link: '/docs/2020 Accomplishment Report.pdf'
    },
    {
      id: 7,
      year: 2021,
      thumbnail: '/images/reports/ar-2021-thumbnail.webp',
      title: 'report.2021.title',
      link: '/docs/2021 Accomplishment Report.pdf'
    },
    {
      id: 8,
      year: 2022,
      thumbnail: '/images/reports/ar-2022-thumbnail.webp',
      title: 'report.2022.title',
      description: 'report.2022.description',
      link: '/docs/2022 Accomplishment Report.pdf',
      latest: true
    }
  ]
};
