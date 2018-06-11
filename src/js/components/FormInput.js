import React, {Component} from 'react';
import propTypes from 'prop-types';

class FormInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render() {
        return(
            <div className="form-group">
                <label>{this.props.label}</label>
                <input type={this.props.type} className="form-control" 
                    id={this.props.id} 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.updateStateProp}
                    value={this.props.value}/>
            </div>
        );
    }
}
export default FormInput;

FormInput.propTypes = {
    type: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    placeholder: propTypes.string,
    updateStateProp: propTypes.func.isRequired,
    value: propTypes.string
};