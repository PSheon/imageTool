import { lightBlue, red } from '@material-ui/core/colors';
import { fuseDark } from '@fuse/fuse-colors';

const themesConfig = {
  default: {
    palette: {
      type: 'dark',
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700]
      },
      error: red
    },
    status: {
      danger: 'orange'
    }
  },
  // sunset     : {
  //     palette: {
  //         type     : 'light',
  //         primary  : {
  //             light: '#FF908B',
  //             main : '#D0605E',
  //             dark : '#9B3134'
  //         },
  //         secondary: {
  //             light       : '#C76A1D',
  //             main        : '#FF994C',
  //             dark        : '#FFCA7B',
  //             contrastText: '#FFF'
  //         },
  //         error    : red
  //     },
  //     status : {
  //         danger: 'orange'
  //     }
  // },
  // greeny     : {
  //     palette: {
  //         type     : 'light',
  //         primary  : {
  //             light: '#6CABD4',
  //             main : '#387CA3',
  //             dark : '#005074'
  //         },
  //         secondary: {
  //             light       : '#89F6CF',
  //             main        : '#55C39E',
  //             dark        : '#159270',
  //             contrastText: '#FFF'
  //         },
  //         error    : red
  //     },
  //     status : {
  //         danger: 'orange'
  //     }
  // },
  // beach      : {
  //     palette: {
  //         type     : 'light',
  //         primary  : {
  //             light       : '#C4D8DD',
  //             main        : '#93A7AB',
  //             dark        : '#65787C',
  //             contrastText: '#FFF'
  //         },
  //         secondary: {
  //             light       : '#FFB281',
  //             main        : '#F18153',
  //             dark        : '#BA5228',
  //             contrastText: '#FFF'
  //         }
  //     }
  // },
  // tech       : {
  //     palette: {
  //         type     : 'light',
  //         primary  : {
  //             light       : '#87EFFF',
  //             main        : '#4DBCE9',
  //             dark        : '#008CB7',
  //             contrastText: '#FFF'
  //         },
  //         secondary: {
  //             light: '#FFFF83',
  //             main : '#D1E751',
  //             dark : '#9DB516'
  //         }
  //     }
  // },
  // sweetHues  : {
  //     palette: {
  //         type     : 'light',
  //         primary  : {
  //             light       : '#D5C1EB',
  //             main        : '#A391B9',
  //             dark        : '#746389',
  //             contrastText: '#FFF'
  //         },
  //         secondary: {
  //             light: '#90AFD4',
  //             main : '#6080A3',
  //             dark : '#325474'
  //         }
  //     }
  // },
  defaultDark: {
    palette: {
      type: 'dark',
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700]
      },
      error: red
    },
    status: {
      danger: 'orange'
    }
  }
  // deepOcean  : {
  //     palette: {
  //         type     : 'dark',
  //         primary  : {
  //             light: '#8F53E7',
  //             main : '#5A24B4',
  //             dark : '#1E0083'
  //         },
  //         secondary: {
  //             light       : '#FF61FF',
  //             main        : '#FE00E9',
  //             dark        : '#C600B6',
  //             contrastText: '#FFF'
  //         }
  //     }
  // },
  // slate      : {
  //     palette: {
  //         type     : 'dark',
  //         primary  : {
  //             light: '#86FFF7',
  //             main : '#4ECDC4',
  //             dark : '#009B94'
  //         },
  //         secondary: {
  //             light       : '#FF9D99',
  //             main        : '#FF6B6B',
  //             dark        : '#C73840',
  //             contrastText: '#FFF'
  //         }
  //     }
  // }
};

export default themesConfig;
