import React from 'react'
import PropTypes from 'prop-types'
const elementGenerator = ({ type, label, className }) => {
    switch (type) {
        case "button":
            return (
                <div className="form-component">
                    <button type={type} className={className} >
                        {label}
                    </button>
                </div>);
        default:
            return (
                <div className="form-component">
                    <label htmlFor={type - label}>
                        <span>{label}</span>
                        <input type={type} className={className} />
                    </label></div>);
    }
};
function FormComponent(props) {
    return (
        elementGenerator(props)
    )
}

FormComponent.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string
}

export default FormComponent

