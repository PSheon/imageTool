import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse';
import { HomeConfig } from 'app/main/home/HomeConfig';

const routeConfigs = [HomeConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    component: () => <Redirect to="/" />
  }
];

export default routes;
