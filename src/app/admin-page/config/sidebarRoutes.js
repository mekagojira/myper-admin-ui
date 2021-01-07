const sidebarRoutes = (config = {}) => [
    {
        name: 'NAVIGATION',
        isCategory: true,
        children: [
            {
                name: 'Dashboard',
                url: '/admin',
                icon: 'icofont-home',
                ...config?.navigation?.dashboard,
            },
            {
                name: 'Setting',
                url: '/admin/settings',
                icon: 'icofont-settings-alt',
                ...config?.navigation?.settings,
            },
        ],
    },
    {
        name: 'APP',
        isCategory: true,
        children: [
            {
                name: 'Chat',
                url: '/admin/chat',
                icon: 'icofont-chat',
                ...config?.app?.chat,
            },
        ],
    },
];

export default sidebarRoutes;
