import Form from 'react-bootstrap/Form';

import { UserContext } from '../second/second';
import React, { useState } from 'react';
import { useContext } from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function BasicExample({close}) {
    const value = useContext(UserContext);
  
    const [name, setName] = useState('');
    const [email, setemail] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleChangee = (event) => {
        setemail(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('credentials', JSON.stringify([{'name':event.target.name.value},{'email': event.target.email.value}]));
       close();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Movie</InputGroup.Text>
                    <FormControl
                    id='movie'
                        placeholder="Enter name"
                        value={value}
                        onChange={handleChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                    id='name'
                        placeholder="Enter name"
                        value={name}
                        onChange={handleChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                    id='email'
                        placeholder="Enter email"
                        value={email}
                        onChange={handleChangee}
                    />
                </InputGroup>
                <Button type="submit">   Book Ticket</Button>
            </form>



        </>
    );
}

export default BasicExample;