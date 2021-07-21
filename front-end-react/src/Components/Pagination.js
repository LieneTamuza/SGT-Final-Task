import { NavLink } from "react-router-dom";

function Pagination({ articlesPerPage, totalArticles, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <div>
            <nav className="pagination mb-5 d-flex justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <NavLink onClick={() => paginate(number)} to="/news" className="page-link">
                            {number}
                        </NavLink>
                    </li>
                ))}
            </nav>
        </div>
    );
}

export default Pagination;