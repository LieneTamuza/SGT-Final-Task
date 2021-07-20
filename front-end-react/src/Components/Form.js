import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
                <div className="col form-validate">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username *"
                            {...register("username", {
                                required: "⚠ Username is required",
                                minLength: {
                                    value: 5,
                                    message: "⚠ Username must be at least 5 characters long"
                                }
                            })} />
                    </div>
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
            </div>

            <div className="row mb-3">
                <div className="col form-validate">
                    <input
                        className="form-control"
                        placeholder="First name *"
                        {...register("firstName", {
                            required: "⚠ First name is required",
                            minLength: {
                                value: 2,
                                message: "⚠ Min length is 2"
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
                                message: "⚠ Min length is 2"
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

            <div className="row  mb-3">
                <div className="col form-validate">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Email *"
                        {...register("email", {
                            required: "⚠ Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
                    <select className="form-select">
                        <option defaultValue hidden>Select your country:</option>
                        <option value="1">Estonia</option>
                        <option value="2">Latvia</option>
                        <option value="3">Lithuania</option>
                    </select>
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
                            I have read and agree to the <NavLink to="">Terms and Conditions</NavLink> and <NavLink to="">Privacy Policy</NavLink>*
                        </label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <button type="submit" className="btn main-page-btn my-3">Sign up!</button>
                </div>
            </div>
        </form>
    );
}

export default Form;