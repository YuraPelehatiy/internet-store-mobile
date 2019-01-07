import screens from '../../navigation/screens';

const SEPARATOR = '#separator';

export const UnauthorizedDrawerConfig = {
    items: [
        {
            id: 1, title: 'Home', key: screens.Home, iconName: 'home',
        },
        {
            id: 2, title: 'About Us', key: screens.AboutUs, iconName: 'info',
        },
        {
            id: 3, title: SEPARATOR,
        },
        {
            id: 4, title: 'Sign In', key: screens.SignIn, iconName: 'info',
        },
    ],
};

export const AuthorizedDrawerConfig = {
    items: [
        {
            id: 1, title: 'Home', key: screens.Home, iconName: 'home',
        },
        {
            id: 2, title: 'About Us', key: screens.AboutUs, iconName: 'info',
        },
    ],
};