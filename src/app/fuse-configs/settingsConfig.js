const settingsConfig = {
  layout: {
    style: 'layout1', // layout-1 layout-2 layout-3
    config: {
      navbar: {
        display: false
      },
      footer: {
        style: 'static'
      }
    } // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  theme: {
    main: 'defaultDark',
    navbar: 'defaultDark',
    toolbar: 'defaultDark',
    footer: 'defaultDark'
  }
};

export default settingsConfig;
