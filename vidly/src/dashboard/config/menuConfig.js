export default [
    {
        title: 'Home',
        icon: 'home',
        children: [
            {title: 'Dashboard', path: '/dashboard'},
            {title: 'Feed', path: '/feed'},
            {title: 'Landing', path: '/landing'},
        ]
    },
    {
        title: 'Pages',
        icon: 'pages',
        children: [
            {title: 'Activity', path: '/activity'},
            {title: 'Billing', path: '/billing'},
        ]
    },
    {
        title: 'Chat',
        icon: 'chat',
        path: '/chat'
    },
    {
        title: 'Authentication',
        icon: 'authentication',
        children: [
            {
                title: 'Basic',
                children: [
                    {title: 'Login', path: '/login'},
                    {title: 'Logout', path: '/logout'},
                    {title: 'Register', path: '/register'},
                ]
            },
            {
                title: 'Card',
                children: [
                    {title: 'Login', path: '/login'},
                    {title: 'Logout', path: '/logout'},
                    {title: 'Register', path: '/register'},
                ]
            }
        ]
    }
];
