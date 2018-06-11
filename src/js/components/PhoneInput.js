import React, {Component} from 'react';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.i18n';
import propTypes from 'prop-types';


class PhoneInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            phoneRawValue:''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({phoneRawValue: e.target.rawValue});
        this.props.updatePhone(e.target.rawValue);
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <Cleave placeholder="Enter your phone number"
                        options={{phone: true, phoneRegionCode: 'GB'}}
                        onChange={this.onChange.bind(this)} 
                        className="form-control"/>
            </div>
         );
    }
}

export default PhoneInput;
PhoneInput.propTypes = {
    label: propTypes.string.isRequired,
    updatePhone: propTypes.func.isRequired
}