import React from 'react';
import {
    Redirect
} from "react-router-dom";

import Home from '../pages/home';
import Profile from '../pages/profile';

const routes = [{
        path: "/",
        exact: true,
        render: () => ( <
            Redirect to = '/home' / >
        )
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/profile",
        component: Profile
    },
]

export default routes;