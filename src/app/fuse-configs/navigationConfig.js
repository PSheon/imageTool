const navigationConfig = [
  {
    id: 'applications',
    title: '應用程式',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: '影像處裡工具',
        title: '影像處裡工具',
        type: 'item',
        icon: 'camera_enhance',
        url: '/'
      },
      {
        id: '人臉辨識工具',
        title: '人臉辨識工具',
        type: 'item',
        icon: 'whatshot',
        url: '/facing'
      }
    ]
  }
];

export default navigationConfig;
