import { NavLink } from 'react-router-dom';

function Page404() {

    return (
        <div className="container px-4 py-5 my-5 text-center error-template">
            <h1 className="display-5 fw-bold">Oops!</h1>
            <h2 className="display-7 fw-bold">404 Not Found</h2>
            <div className="col-lg-6 mx-auto error-details">
                <p className="lead mb-4">Sorry, an error has occured. Requested page not found!</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center error-actions">
                    <NavLink className="nav-link" exact to="/">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Take Me Home</button>
                    </NavLink>
                    {/* <NavLink className="nav-link" to="/">
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Support</button>
                </NavLink> */}
                </div>
            </div>
        </div>
    );
}

export default Page404;