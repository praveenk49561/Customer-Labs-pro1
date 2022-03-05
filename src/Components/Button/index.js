import React from "react";

const Button = (props) => {
    const { onClick, label, title,  data, children, className, disabled } = props;
    const onClickInternal = () => {
        onClick(data);
    };
    return <button title={title} className={`cl-button ${className}`} type="button" disabled={disabled} key={label} onClick={onClickInternal}>{children ?? label}</button>;
};

export default Button;