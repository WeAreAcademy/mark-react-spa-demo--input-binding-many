import React, { ChangeEvent, useState } from "react";

export default function InputForm() {

    //This object could also hold intended labels, placeholder texts, and validation functions for each input.
    //We've pre-populated the form but you could start with empty strings.
    const initialInputs = {
        name: "Monty",
        faveColour: "Blue",
        phoneNumber: "555-111-222",
        address: "Bridge Street",
        country: "England"
    };

    //This one state variable will hold an object containing all of the input states.
    const [inputs, setInputs] = useState(initialInputs);


    /** Handle change in ANY of the inputs.  Takes an event as normal.  
     * Figures out which field is being changed from event.input.name, and
     * updates that state in the state object. */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        //Unusually, this pattern reads the field name from the input name attr.
        const fieldName = event.target.name;
        const value = event.target.value;
        //Uncomment to see each event as it comes through
        //console.log(`${fieldName} changed to ${value}`);
        setInputs(prevInputs => ({ ...prevInputs, [fieldName]: value }));
    }

    function handleSubmitButtonClick() {
        //Let's just show the user the inputs object as a string...
        alert(JSON.stringify(inputs, null, 2));
    }

    function handleClearButtonClick() {
        setInputs(initialInputs);
    }

    return (
        <div>
            <h3>Multiple form fields in one state hook object</h3>

            <input value={inputs.name} name="name" onChange={handleChange} />

            <input value={inputs.address} name="address" onChange={handleChange} />

            <input value={inputs.country} name="country" onChange={handleChange} />

            <input value={inputs.faveColour} name="faveColour" onChange={handleChange} />

            <input value={inputs.phoneNumber} name="phoneNumber" onChange={handleChange} />

            <button onClick={handleSubmitButtonClick}>Submit</button>

            <button onClick={handleClearButtonClick}>Clear</button>
        </div>
    );
}
