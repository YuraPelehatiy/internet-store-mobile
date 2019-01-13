import screens from '../../navigation/screens';

export const UnauthorizedDrawerConfig = {
    items: [
        {
            id: 0, separator: true,
        },
        {
            id: 1, title: 'Home', key: screens.Home, iconName: 'home',
        },
        {
            id: 2, title: 'About Us', key: screens.AboutUs, iconName: 'info',
        },
        {
            id: 3, title: 'Cart', key: screens.Cart, iconName: 'info',
        },
        {
            id: 4, separator: true,
        },
        {
            id: 5, title: 'Sign In', key: screens.SignIn, iconName: 'info',
        },
    ],
};

export const AuthorizedDrawerConfig = {
    items: [
        {
            id: 0, separator: true,
        },
        {
            id: 1, title: 'Home', key: screens.Home, iconName: 'home',
        },
        {
            id: 2, title: 'About Us', key: screens.AboutUs, iconName: 'info',
        },
        {
            id: 3, title: 'Cart', key: screens.Cart, iconName: 'info',
        },
        {
            id: 4, separator: true,
        },
        {
            id: 5, title: 'Profile', key: screens.Profile, iconName: 'info',
        },
        {
            id: 6, separator: true,
        },
        {
            id: 7, title: 'Sign Out', key: screens.SignIn, iconName: 'info',
        },
    ],
};