import Breadcrumb from '../Components/Breadcrumb';
import Form from "../Components/Form";

function Register() {
    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' }
    ];

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 col-lg-6 offset-lg-3 p-5 my-2">
                    <h3 className="mb-3">Register</h3>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Register;