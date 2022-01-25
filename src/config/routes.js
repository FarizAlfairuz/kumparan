import { Home, PhotoDetails, PostDetails, UserDetails } from '@pages'

export const routes = [
    {
        name: "Home",
        path: () => {
            return "/";
        },
        component: Home,
    },
    {
        name: "Post",
        path: () => {
            return "/post";
        },
        component: Home,
    },
    {
        name: "PhotoDetails",
        path: () => {
            return "/photo/:id";
        },
        component: PhotoDetails,
    },
    {
        name: "PostDetails",
        path: () => {
            return "/post/:id";
        },
        component: PostDetails,
    },
    {
        name: "UserDetails",
        path: () => {
            return "/user/:id";
        },
        component: UserDetails,
    },
]