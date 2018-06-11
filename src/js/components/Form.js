import React, {Component} from 'react';
import FormInput from './FormInput';
import DateInput from './DateInput';
import PhoneInput from './PhoneInput';
import DisplayErrors from './DisplayErrors';
import Moment from 'moment';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '', 
            email: '',
            birthdate: '',
            phone: '',
            address: '',
            errorMessage: []
            /* name: 'by',
            surname: 'lee', 
            email: 'toto@gma.il',
            birthdate: '23/01/1989',
            phone: '01162746190',
            address: 'mon adresse 00000',
            errorMessage: [] */
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateDOB = this.updateDOB.bind(this);
        this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var errors = [];
        for(let key in this.state) {
            const data = this.state[key];
            let result = this.checkData(key, data)
            if(result && result !== "") errors.push(result);
        }
        this.setState({errorMessage: errors});
        if(errors.length === 0) {
            this.displayResult();
        }
    }

    //#region Form validation
    checkData(key, data) {
        let errorMsg = "";
        switch(key) {
            case 'email':
                if(this.validateEmail(data) === false)
                    errorMsg = "Enter a valid email address"; 
                break;
            case 'phone':
                if(this.validateGBPhoneNumber(data) === false)
                    errorMsg =  "Enter a valid phone number";
                break;
            case 'birthdate':
                if(this.validateBirthdate(data) === false)
                    errorMsg = "Enter a valid birthdate";
                break;
            default:
                if(data === "")
                    errorMsg =  `Enter your ${key}`;
                break;
        }
        return errorMsg;
    }

    validateEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    validateGBPhoneNumber(phone) {
        const regex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
        return regex.test(phone);
    }

    validateBirthdate(date) {
        return Moment(date, "DD/MM/YYYY", true).isValid();
    }
    //#endregion

    //#region Update form value from child component
    updateState(e) {
        this.setState({[e.target.id]: e.target.value});
     }

    updateDOB(value) {
        console.log("update DOB", value)
        this.setState({'birthdate': value});
    }

    updatePhoneNumber(value) {
        this.setState({'phone': value});
    }
    //#endregion

    displayResult() {
        let stateCopy = Object.assign(this.state);
        delete stateCopy.errorMessage; 
        
        const popup = window.open("http://localhost:3000/popup.html");
        popup.result = JSON.stringify(stateCopy);
    }
    render() {
        return (
            <div className="user-creation">
                <form >
                    <FormInput id="name" label="Name" type="text" placeholder="Name" 
                                value={this.state.name} updateStateProp={this.updateState} />
                    <FormInput id="surname" label="Surname" type="text" placeholder="Surname" 
                                value={this.state.surname} updateStateProp={this.updateState} />
                    <FormInput id="email" label="E-mail" type="email" placeholder="you@example.com"
                                value={this.state.email} updateStateProp={this.updateState} />
                    <PhoneInput label="Phone number" updatePhone={this.updatePhoneNumber}/>
                    <FormInput id="address" label="Address" type="text" placeholder="Address" 
                                value={this.state.address} updateStateProp={this.updateState} />
                    <DateInput label="Birthdate" placeholder="DD/MM/YYYY" updateDOB={this.updateDOB}/>
                    <button type="submit" className="btn btn-my-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
                <DisplayErrors errors = {this.state.errorMessage} />
            </div>
        )
    }
}

export default Form;