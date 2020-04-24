import React from 'react';

import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Splash from './pages/Splash'

const AppSwitchNavigator = createSwitchNavigator(
    {

        Splash: {
            screen: Splash
        },
        Welcome: {
            screen: Welcome
        },
        Signin: {
            screen: Signin
        },
        Login: {
            screen: Login
        },
        Home:{
            screen: Home
        },
    },
    {
        initialRouteName: 'Splash'
    }
);

export default createAppContainer(AppSwitchNavigator);