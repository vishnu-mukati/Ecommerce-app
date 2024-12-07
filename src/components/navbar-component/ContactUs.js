import React, { useState } from "react";


const ContectUs = (props) => {

    const [enteredname, setEneterdName] = useState('');
    const [enteredemail, setEneterdEmail] = useState('');
    const [enterednumber, setEneterdNumber] = useState('');

    const nameChangeHandler = (event) => {
        setEneterdName(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEneterdEmail(event.target.value);
    }

    const phoneChangeHandler = (event) => {
        setEneterdNumber(event.target.value);
    }

    const submitDataHandler = (event) => {
        event.preventDefault();
        const userDataobj = {
            enteredname,
            enteredemail,
            enterednumber,
        }
        props.onAddData(userDataobj);

        setEneterdName('');
        setEneterdEmail('');
        setEneterdNumber('');
    }

    return (
        <form onSubmit={submitDataHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={enteredname} onChange={nameChangeHandler} />
            </div>
            <div>
                <label htmlFor="email">Email Id</label>
                <input type="email" id="email" value={enteredemail} onChange={emailChangeHandler} />
            </div>
            <div>
                <label htmlFor="phone-number">Phone-Number</label>
                <input type="number" id="phone-number" value={enterednumber} onChange={phoneChangeHandler} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ContectUs;