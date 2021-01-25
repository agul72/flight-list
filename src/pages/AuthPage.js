import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/authActions";

export default function AuthPage() {

    const dispatch = useDispatch();
    const nameRegex = 'user';
    const passwordRegex = 'password';

    const [form, setForm] = useState({
        name: '',
        password: ''
    });

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (!form.name.trim().match(nameRegex)) {
            // show email error notification
            return setIsValid(false);
        }
        if (!form.password.trim().match(passwordRegex)) {
            // show password error notification
            return setIsValid(false);
        }
        setIsValid(true);
    }, [form]);


    const changeHandler = event => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    };

    const loginHandler = () => {
        if ((form.name.trim().match(nameRegex)) &&
            (form.password.trim().match(passwordRegex))) {

            return dispatch(loginUser());

        } else {
            window.alert('Incorrect register data');
        }
    }


    return (
        <div className={'row'}>
            <div className="col s6 offset-s3">
                <h1>Flight list App</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter user name"
                                    id="name"
                                    type="text"
                                    name={'name'}
                                    value={form.name}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    name={'password'}
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            onClick={loginHandler}
                            disabled={!isValid}
                        >
                            Login
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

