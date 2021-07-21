import { NavLink } from 'react-router-dom';

function Page404() {
    return (
        <div className="container px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">404</h1>
            <h2 className="display-7 fw-bold">LOOKS LIKE YOU'RE LOST!</h2>
            <div className="col-lg-6 mx-auto error-details">
                <p className="mb-4">The page that you are looking for is not available</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center error-actions">
                    <NavLink className="nav-link" exact to="/">
                        <button type="button" className="btn btn-primary btn-md px-4">Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Page404;