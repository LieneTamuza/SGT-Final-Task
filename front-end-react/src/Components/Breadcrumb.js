import { NavLink } from 'react-router-dom';

function Breadcrumb({ paths }) {
    const links = paths.map((path, index) => {
        if (path.link) {
            return <li className="breadcrumb-item fw-bolder" key={index}><NavLink to={path.link}>{path.title}</NavLink></li>
        }
        return <li className="breadcrumb-item active" aria-current="page" key={index}>{path.title}</li>
    });

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb my-3">
                {links}
            </ol>
        </nav>
    );
}

export default Breadcrumb;