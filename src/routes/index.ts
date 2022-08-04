import React from "react";
import Login from "../pages/Login";
import Profile from "../pages/Profile";


export interface IRoute {
    path: string;
    element: React.ComponentType;
    exact?: boolean;
};

export enum RouteNames {
    LOGIN = '/login',
    PROFILE = '/profile'
};

export const privateRoutes: IRoute[] = [
    {path: RouteNames.PROFILE, element: Profile, exact: true},
];

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login, exact: true},
];