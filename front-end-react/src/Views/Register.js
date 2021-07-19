import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Breadcrumb from '../Components/Breadcrumb';

function Register() {
    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' }
    ];

    let schema = yup.object().shape({
        name: yup.string().required(),
        age: yup.number().required().positive().integer(),
        email: yup.string().email(),
        createdOn: yup.date().default(function () {
          return new Date();
        }),
      });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <h1>Register</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', retypePassword: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <Field id="firstName" name="firstName" placeholder="First name*" />
                            <ErrorMessage name="firstName" component="div" />
                        </div>
                        <div className="mb-3">
                            <Field id="lastName" name="lastName" placeholder="Last name" />
                            <ErrorMessage name="lastName" component="div" />
                        </div>
                        <div className="mb-3">
                            <Field type="email" name="email" placeholder="Email*" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="mb-3">
                            <Field type="password" name="password" placeholder="Password*" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div className="mb-3">
                            <Field type="password" name="retypePassword" placeholder="Retype password*" />
                            <ErrorMessage name="retypePassword" component="div" />
                        </div>
                        <div className="mb-3">
                            <label>
                                <Field type="checkbox" name="checked" value="Agree" />
                                Agree to terms and conditions
                            </label>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register;