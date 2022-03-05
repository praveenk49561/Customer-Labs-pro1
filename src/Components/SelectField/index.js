import React from "react";

const SelectField = (props) => {
    const { onChange, className, containerClassName, placeholder, value, options } = props;

    const onChangeInternal = (e) => {
        onChange(e, value);
    };

    return (
    <div className={`cl-select-field-container ${containerClassName}`}>
        <select key={value} onChange={onChangeInternal} className={`cl-select-field ${className}`} placeholder="akjndkajdkjnawkj" value={value}>
            <option className="cl-select-field-option" value="" hidden disabled>{placeholder}</option>
            {options?.length === 0 && <option className="cl-select-field-option" value="**nodata"disabled>No data available</option>}
            {options?.map((eOption) => <option className="cl-select-field-option" key={eOption.value} disabled={eOption.value === value} hidden={eOption.value===value} value={eOption.value}>{eOption.label}</option>)}
        </select>
    </div>
    );
};

export default SelectField;