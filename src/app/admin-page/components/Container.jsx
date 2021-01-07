import Sidebar from './Sidebar';

export default function Container(props) {
    return (
        <div className="lg:px-16 py-8 flex">
            <div className="lg:pr-4 lg:w-1/5">
                <Sidebar />
            </div>
            <div className="lg:pl-4 lg:w-4/5">{props.children}</div>
        </div>
    );
}
