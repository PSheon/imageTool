import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FuseAnimate, FusePageCarded } from '@fuse';

import EditImageSection from './edit/EditImageSection';
import CompressImageSection from './compress/CompressImageSection';
import InfoSection from './info/InfoSection';

const styles = theme => ({
  layoutRoot: {}
});

function Home(props) {
  const { classes } = props;

  return (
    <FusePageCarded
      classes={{
        root: classes.layoutRoot
      }}
      header={
        <div className="p-24 h-200 w-full">
          <FuseAnimate>
            <Typography
              className="mt-22 sm:mt-22 sm:py-12 text-24 sm:text-28 font-600 text-center pb-10"
              color="inherit"
            >
              此服務僅在客戶端執行
              <br />
              <span className="text-blue"></span> 而且
              <span className="text-blue">不會上傳任何圖片</span>
            </Typography>
          </FuseAnimate>
        </div>
      }
      content={
        <div className="flex flex-col h-full p-24">
          <EditImageSection />
          <CompressImageSection />
          <InfoSection />
        </div>
      }
    />
  );
}

export default withStyles(styles, { withTheme: true })(Home);
