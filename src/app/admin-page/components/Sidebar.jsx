import sidebarRoutes from '../config/sidebarRoutes';

export default function Sidebar(props) {
    const routes = sidebarRoutes({
        navigation: {
            dashboard: {
                badge: 2,
            },
        },
    });

    const renderRoute = (route, index) => {
        const { isCategory, name, children, icon, badge } = route;

        const childrenRoutes = children?.length ? (
            <div className="">
                {children.map((route, subIndex) =>
                    renderRoute(route, `${index}_${subIndex}`)
                )}
            </div>
        ) : null;

        if (isCategory)
            return (
                <div className="mb-4" key={index}>
                    <div className="dark:text-gray-400 uppercase font-bold">
                        {name}
                    </div>
                    {childrenRoutes}
                </div>
            );

        return (
            <div className="dark:text-white" key={index}>
                <div className="font-light cursor-pointer px-8 -mx-4 py-2 dark:hover:bg-gray-800 flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl w-6">
                            {icon ? <i className={icon} /> : null}
                        </span>
                        <span className="ml-2">{name}</span>
                    </div>
                    {badge ? (
                        <span className="px-3 py-0.5 rounded text-xs dark:bg-blue-400">
                            {badge}
                        </span>
                    ) : null}
                </div>
                {childrenRoutes}
            </div>
        );
    };

    return (
        <div className="dark:bg-gray-700 p-4 rounded-sm flex flex-wrap">
            <div className="flex w-full justify-center">
                <div className="dark:text-white font-bold text-sm flex flex-wrap justify-center">
                    <div className="w-full flex flex-wrap justify-center">
                        <div
                            className="w-16 h-16 rounded-full"
                            style={{
                                backgroundImage: `url('img/avatar.jpg')`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                    <div className="mt-4">Myper Admin</div>
                </div>
            </div>

            <div className="mt-6 w-full text-sm">{routes.map(renderRoute)}</div>
        </div>
    );
}
