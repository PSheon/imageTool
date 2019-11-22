import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';

function FooterLayout1(props) {
  const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className="relative z-10 mt-12 bg-transparent shadow-none"
        color="default"
      >
        <Toolbar className="px-32 py-0 flex items-center">
          <Typography className="flex flex-1">
            © 2019, PSheon & Shophia
          </Typography>
          <a href="####" target="_blank" rel="noreferrer noopener">
            <Typography className="px-8">Github</Typography>
          </a>
          <a
            href="https://www.instagram.com/sophia.hou"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Typography className="px-8">Instagram</Typography>
          </a>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default FooterLayout1;
