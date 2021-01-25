import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createFlight} from "../redux/flightActions";

export const CreatePage = () => {

    const emptyForm = {
        from: '',
        to: '',
        departureTime: '',
        landingTime: '',
        price: 0

    }
    const [form, setForm] = useState(emptyForm);
    const dispatch = useDispatch();

    const changeInputHandler = event => {
        setForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const item = {...form};
        item.id = Date.now().toLocaleString();
        dispatch(createFlight(item));
        setForm(emptyForm);
    }


    return (
        <div className={'row'}>
            <h3>Create Page</h3>
            <form
                className="col s8 offset-s2"
                onSubmit={submitHandler}
            >
                <div className="input-field">
                    <input
                        placeholder="From"
                        name="from"
                        type="text"
                        value={form.from}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className="input-field">
                    <input
                        placeholder="To"
                        name="to"
                        type="text"
                        value={form.to}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className="input-field">
                    <input
                        placeholder="Departure time"
                        name="departureTime"
                        type="text"
                        value={form.departureTime}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className="input-field">
                    <input
                        placeholder="Landing time"
                        name="landingTime"
                        type="text"
                        value={form.landingTime}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className="input-field">
                    <input
                        placeholder="Price"
                        name="price"
                        type="text"
                        value={form.price}
                        onChange={changeInputHandler}
                    />
                </div>
                <button className="btn waves-effect waves-light"
                        type="submit" name="action"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}


