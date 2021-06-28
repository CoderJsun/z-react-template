import React from 'react';
import {
    Redirect
} from "react-router-dom";


import Home from '../pages/home';
import Friend from '../pages/friend';



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
        path: "/friend",
        component: Friend
    },
]

export default routes;