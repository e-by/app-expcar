import React, {Component} from 'react';
import propTypes from 'prop-types';

class DisplayErrors extends Component {

    constructor() {
        super();
        this.state = {
            isActive:"error-hidden"
        }
    }
    
    render(){
        let toggleError = this.props.errors.length > 0 ? 'error-active' : 'error-hidden';
        return(
            <div className={toggleError}>
                <div className="title-error">error messages</div>
                <ul>
                    {
                        this.props.errors.map((error, i) => {
                            return <li key={i}>{error}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default DisplayErrors;

DisplayErrors.propTypes = {
    errors: propTypes.array
}
