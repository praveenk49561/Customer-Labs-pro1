import React from "react";


const AnchorButton = (props) => {
    const { onClick, label, title, data, icon, children, className, disabled } = props;
    const onClickInternal = () => {
        onClick(data);
    };
    return <button title={title} disabled={disabled} className={`cl-anchor-button ${className}`} type="button" key={label} onClick={onClickInternal}>
        <span className={`cl-anchor-button-icon-container`}>{icon}</span>
        <span className={`cl-anchor-button-label-container`}>{children ?? label}</span>
    </button>
}

export default AnchorButton;