import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../Assets/Images/logo.png';

function Header() {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand px-1">
                        <img src={logo} height="30" alt="Logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <Hamburger>
                            <span className="navbar-toggler-icon"></span>
                        </Hamburger>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link fw-bolder px-3">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/news" className="nav-link fw-bolder px-3">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/forum" className="nav-link fw-bolder px-3">Forum</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link fw-bolder px-3">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link fw-bolder px-3">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;