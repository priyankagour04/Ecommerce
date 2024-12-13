const routes = {
    home: {
        path: '/',
        element: 'Home',
        isProtected: true,
    },
    shop: {
        path: '/shop',
        element: 'Shop',
        isProtected: true,
    },
    products: {
        path: '/products',
        element: 'Products',
        isProtected: true,
    },
    contact: {
        path: '/contact',
        element: 'ContactUs',
        isProtected: true,
    },
    about: {
        path: '/about',
        element: 'About',
        isProtected: false,
    },
    dashboard: {
        path: '/dashboard',
        element: 'Dashboard',
        isProtected: true,
    },
    login: {
        path: '/login',
        element: 'Login',
        isProtected: false,
    },
    signup: {
        path: '/signup',
        element: 'Signup',
        isProtected: false,
    },
    notFound: {
        path: '*',
        element: 'NotFound',
        isProtected: false,
    },
};

export default routes;
