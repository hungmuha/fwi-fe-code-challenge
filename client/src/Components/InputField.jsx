import React from 'react'

const InputField = ({label, type, value, changeFn, showMsg=true, msgClass='', message}) => {
    return(
        <div className="input-field">
            <label htmlFor={label}>{label}</label>
            <input type={type} id={label} value={value}  onChange={(e) => changeFn(e.target.value)}/>
            {showMsg && (
                <small className={msgClass}>
                    {message}
                </small>
            )}
        </div>
    )
}

export default InputField;