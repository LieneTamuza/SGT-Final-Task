import Breadcrumb from '../Components/Breadcrumb';
import Form from '../Components/Register/Form';

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
            <div className="row">
                <div className="col-12 col-lg-6 px-3 my-2">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Register;