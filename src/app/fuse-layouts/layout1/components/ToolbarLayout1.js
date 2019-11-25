import React from 'react';
import { AppBar, Hidden, Toolbar } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
// import { FuseSearch, FuseShortcuts } from '@fuse';
import { FuseShortcuts } from '@fuse';
import clsx from 'clsx';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
// import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  appBar: {
    background:
      'linear-gradient(180deg, rgba(44,48,60,.9) 44%, rgba(44,48,60,.43) 73%, rgba(44,48,60,0))'
  },
  toolbar: {
    minHeight: '52px',
    backgroundColor: '#3e3e3e'
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: theme.palette.divider
  }
}));

function ToolbarLayout1(props) {
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);

  const classes = useStyles(props);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx(
          classes.appBar,
          'flex relative z-10 pt-12 px-16 pb-8 shadow-none sm:px-32'
        )}
        color="default"
      >
        <Toolbar className={clsx(classes.toolbar, 'p-0 rounded-8')}>
          {config.navbar.display && config.navbar.position === 'left' && (
            <Hidden lgUp>
              <NavbarMobileToggleButton className="w-64 h-48 sm:h-64 p-0" />
              <div className={classes.separator} />
            </Hidden>
          )}

          <div className="flex flex-0 pl-16 h-48 sm:h-64">
            <Logo />
          </div>

          <div className="flex flex-1">
            <Hidden mdDown>
              <FuseShortcuts className="px-16" />
            </Hidden>
          </div>

          <div className="flex items-center">
            {/* <UserMenu /> */}

            {/* <div className={classes.separator} /> */}

            {/* <FuseSearch /> */}

            {/* <Hidden lgUp>
              <div className={classes.separator} />
            </Hidden> */}

            <div className={classes.separator} />

            <QuickPanelToggleButton />
          </div>

          {config.navbar.display && config.navbar.position === 'right' && (
            <Hidden lgUp>
              <NavbarMobileToggleButton />
            </Hidden>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default ToolbarLayout1;
