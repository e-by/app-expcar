import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import propTypes from 'prop-types';

class DateInput extends Component {

    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
          };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.props.updateDOB(date.format('DD/MM/YYYY'));
        this.setState({
          startDate: date
        });
    }

    render() {
        return(
            <div className="form-group">
                <label>Birthdate</label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    locale="en-gb"
                    placeholderText={this.props.placeholder}
                    className="form-control"
                />
            </div>
        )
    }
}
export default DateInput;

DateInput.propTypes = {
    updateDOB: propTypes.func.isRequired
}