import React from "react";

const InputField = (props) => {
    const { onChange, value, className, type, placeholder } = props;
    return <div className={`cl-input-field-container`}><input type={type} key={placeholder} onChange={onChange} className={`cl-input-field ${className}`} placeholder={placeholder} value={value} /></div>
};

export default InputField;