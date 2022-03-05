import React from "react";


const SlideIn = (props) => {
    const { show, width, body, header, footer, classNameHeader, classNameFooter, classNameBody } = props;
    return (
        <div style={width ? { width } : null} className={show ? 'cl-slide-in' : 'cl-slide-in cl-silde-in-closed'}>
            <div>
                <div className={`cl-slide-in-header ${classNameHeader}`}>
                    {header}
                </div>
                <div className={`cl-slide-in-body ${classNameBody}`}>
                    {body}
                </div>
                <div className={`cl-slide-in-footer ${classNameFooter}`}>
                    {footer}
                </div>
            </div>
        </div>
    );
};

export default SlideIn;