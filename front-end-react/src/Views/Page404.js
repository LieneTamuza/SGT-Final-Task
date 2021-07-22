import { NavLink } from 'react-router-dom';
import map from '../Assets/Images/page_404.png';

function Page404() {
    
    return (
        <div className="container p-4 text-center">
            <h1 className="display-6 fw-bold">404</h1>
            <h3 className="fw-bold">Looks like you're lost!</h3>
            <div className="col-lg-6 mx-auto">
                <p className="mb-4">But since you're here, take a look at the previous map!</p>
                <img src={map} height="555px" alt="Map" />
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <NavLink className="nav-link" exact to="/">
                        <button type="button" className="btn btn-primary btn-md px-4">Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Page404;