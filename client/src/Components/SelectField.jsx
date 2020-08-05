import React from 'react';
import { COUNTRIES } from '../constants';

const SelectField = ({label, value, changeFn, isError, errorMsg}) => {
    let CountryOptions= Object.keys(COUNTRIES).map((key) => {
        return(
            <option key={key} value={key}>{COUNTRIES[key]}</option>
        )
    });
    return(
        <div className="input-field">
            <label htmlFor={label}>{label}</label>
            <select id={label} value={value} onChange={(e) => changeFn(e.currentTarget.value)}>
                {CountryOptions}
            </select>
        </div>
    )
}

export default SelectField;