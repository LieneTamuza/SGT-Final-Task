import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Form() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data, event) => {
        event.preventDefault();
        alert("Thank you for registering!");
    };
    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row mb-3">
                    <div className="col form-validate">
                        <input
                            className="form-control"
                            placeholder="First name *"
                            {...register("firstName", {
                                required: "⚠ First name is required",
                                minLength: {
                                    value: 2,
                                    message: "⚠ Minimum length is 2"
                                },
                                pattern: {
                                    value: /[a-z]/gi,
                                    message: "⚠ Invalid characters"
                                }
                            })}
                        />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                    <div className="col form-validate">
                        <input
                            className="form-control"
                            placeholder="Last name *"
                            {...register("lastName", {
                                required: "⚠ Last name is required",
                                minLength: {
                                    value: 2,
                                    message: "⚠ Minimum length is 2"
                                },
                                pattern: {
                                    value: /[a-z]/gi,
                                    message: "⚠ Invalid characters"
                                }
                            })}
                        />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col form-validate">
                        <select className="form-select">
                            <option defaultValue hidden>Select country:</option>
                            <option value="1">Latvia</option>
                            <option value="2">Estonia</option>
                            <option value="3">Lithuania</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col form-validate">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Club"
                            />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col form-validate">
                        <select className="form-select">
                            <option defaultValue hidden>Select class:</option>
                            <option value="1">Elite</option>
                            <option value="2">OPEN-Long</option>
                            <option value="3">OPEN-Short</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col form-validate">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="SportIdent number *"
                                {...register("sportidentNumber", {
                                    minLength: {
                                        value: 5,
                                        message: "⚠ Min length is 5"
                                    },
                                    pattern: {
                                        value: /[0-9]/gi,
                                        message: "⚠ Invalid characters"
                                    }
                                })} />
                        </div>
                        {errors.sportidentNumber && <p>{errors.sportidentNumber.message}</p>}
                    </div>
                    <div className="col form-validate">
                        <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" value="" id="rent" {...register("rent", {
                                required: "⚠ Please check this box if you want to proceed"
                            })}
                            />
                            {errors.rent && <p>{errors.rent.message}</p>}
                            <label className="form-check-label" htmlFor="rent">
                                Rent SIAC
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row  mb-3">
                    <div className="col form-validate">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email *"
                            {...register("email", {
                                required: "⚠ Email is required",
                                pattern: {
                                    value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                                    message: "⚠ Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="col form-validate">
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                id="input-password"
                                className="form-control"
                                placeholder="Password *"
                                {...register("password", {
                                    required: "⚠ Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "⚠ Please lengthen this text to 8 characters or more"
                                    }
                                })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>

                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat password *"
                                {...register("repeatpassword", {
                                    validate: value => value === password.current || "⚠ Passwords do not match"
                                })}
                            />
                            {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col form-validate">
                        <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" value="" id="termsInput" {...register("termsInput", {
                                required: "⚠ Please check this box if you want to proceed"
                            })}
                            />
                            {errors.termsInput && <p>{errors.termsInput.message}</p>}
                            <label className="form-check-label" htmlFor="termsInput">
                                I have read and agree to the <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink> and <NavLink to="privacy-policy">Privacy Policy </NavLink>*
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary my-3">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;