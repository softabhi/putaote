import { useState, useEffect } from "react";
import "./Register.css";

function Register() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //   console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <div className="main_container">
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

            <form onSubmit={handleSubmit}>
                <h4>Singin to your PopX Account</h4>
                <div className="ui divider"></div>
                <div className="ui form">


                    <div className="field mb-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field mb-3">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field mb-3">
                        <label>Email Address</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <label>Enter Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.password}</p>

                    <div className="field">
                        <label>Company Name</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>




                    <h6>Are you an agency</h6>
                    <div className="d-flex align-items-center">
                        <div className="field mx-2">
                            <input
                                type="radio"
                                name="radio_one"
                                value={formValues.password}
                                onChange={handleChange}
                            />   
                        </div>
                        <h6 className="mx-2">Yes</h6>

                        <div className="field">
                            <input
                                type="radio"
                                name="radio_two"

                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <h6 className="mx-2">No</h6>
                    </div>

                    <div className="d-grid gap-2">

                        <button className="btn btn-primary" >Submit</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Register;