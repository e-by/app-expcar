import React, { Component } from 'react';
import Form from './components/Form';
import '../css/App.css';
/*
- Create a simple HTML page form for a user creation.
- A user is defined with a first xname, a last name, an email, a phone number, an address  and a birthdate.
- Submitting the form will simply show in a popup the form data in a JSON format.
- The form must be validated before submission (email, phone number and birthdate). An error in the form will nicely trigger an error (avoid the alert popup!).
- Make use of CSS to make your form fancy and user-friendly (black & white, grey scale,  and the following blue #253455). You can make use of bootstrap if you’d like but it’s not a must.

Additional requirement:
- For the date picker field, please use the JS library daterangepicker.

- For the phone number field, please use the JS library cleave.js.
*/

class App extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="form-title"> Create account</h2>
                <Form id="myDiv" className="foo"/>
            </div>
        );
    }
}
export default App;

