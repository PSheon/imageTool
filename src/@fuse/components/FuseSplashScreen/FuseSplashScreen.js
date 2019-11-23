import React from 'react';

import FUSE_SVG from 'assets/images/logos/fuse.svg';

function FuseSplashScreen() {
  return (
    <div id="fuse-splash-screen">
      <div className="center">
        <div className="logo">
          <img width="128" src={FUSE_SVG} alt="logo" />
        </div>
        <div className="spinner-wrapper">
          <div className="spinner">
            <div className="inner">
              <div className="gap" />
              <div className="left">
                <div className="half-circle" />
              </div>
              <div className="right">
                <div className="half-circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FuseSplashScreen);
