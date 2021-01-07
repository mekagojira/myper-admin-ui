export default function Header(props) {
    return (
        <div className="lg:px-16 dark:bg-gray-700 flex flex-wrap shadow-lg">
            <div className="flex flex-wrap items-center">
                <div className="dark:text-gray-200 dark:hover:bg-blue-500 text-2xl py-4 px-2 -mx-2 cursor-pointer transition-all">
                    Myper Admin
                </div>
                <div className="pl-2">
                    <div className="px-3 py-2 rounded-full overflow-hidden flex flex-wrap">
                        <input
                            className="dark:bg-gray-600 dark:text-white px-3 py-2 rounded-l-full"
                            placeholder="Search"
                        />
                        <button className="dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:bg-blue-700 dark:text-gray-200 transition-all px-4 py-2 rounded-r-full font-bold">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
