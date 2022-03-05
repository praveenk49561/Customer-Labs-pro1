import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faMinus } from '@fortawesome/free-solid-svg-icons'
import InputField from "../../Components/InputField";
import SelectField from "../../Components/SelectField";
import Button from "../../Components/Button";
import AnchorButton from "../../Components/AnchorButton";


const SegmentSaver = (props) => {
    const { options, schemas, setSchemas, name, setName } = props;
    const [activeSchema, setActiveSchema] = useState('');
    const availableOptions = options?.filter((eOption) => {
        const foundArr = schemas?.find((eSchema) => eSchema.value === eOption.value) ?? {};
        return !foundArr.label;
    }) ?? [];

    const onChangeName = (e) => {
        setName(e ? e.currentTarget.value : name);
    }

    const onChangeEachSchema = (e, prev) => {
        const updatedSchema = [ ...schemas].filter((eSchema) => eSchema.value !== prev);
        const currentSchema = availableOptions?.find((eOption) => eOption.value === (e ? e.currentTarget.value : ''));
        setSchemas([
            ...updatedSchema,
            currentSchema
        ]);
    }

    const onChangeActiveSchema = (e) => {
        setActiveSchema(e ? e.currentTarget.value : activeSchema);
    }

    const onClickAddNewSchema = () => {
        const newSchema = availableOptions?.find((eOption) => eOption.value === activeSchema ?? '');
        setSchemas([
            ...schemas,
            newSchema
        ]);
        setActiveSchema('');
    }

    const onEachDeleteClick = (value) => {
        setSchemas((e) => schemas?.filter((eSchema) => eSchema.value !== value));
    }

    return (
        <React.Fragment>
            <div className="cl-segment-saver-container">
                <p className="cl-heading">Enter the name of the segment</p>
                <InputField value={name} onChange={onChangeName} placeholder="Name of the segment" />
                <p className="cl-heading">To save your segment, you need to add the schemas to build the query</p>
                <div className="cl-traits-info">
                <div className="cl-trait-icon-wrap">
                    <div className="cl-circle-icon-container"><FontAwesomeIcon icon={faCircle} color="green" /></div>- User Traits
                </div>
                <div className="cl-trait-icon-wrap">
                    <div className="cl-circle-icon-container"><FontAwesomeIcon icon={faCircle} color="red" /></div>- User Traits
                </div>
                </div>
                {schemas?.length > 0 && <div className="cl-selected-schemas">
                    {schemas?.map(({ value, label }) => <div className="cl-select-del-marker-wrap" key={`wrap_${value}`}>
                            <div className="cl-circle-icon-container"><FontAwesomeIcon icon={faCircle} color="#e6e8eb" /></div>
                            <SelectField key={`select_${value}`} value={value} options={[ ...availableOptions, { label, value }]} onChange={onChangeEachSchema} />
                            <Button className="cl-delete-btn" key={`del_btn_${value}`} data={value} onClick={onEachDeleteClick}>
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                        </div>)}
                </div>}
                <div className="cl-select-del-marker-wrap" key={`wrap_add_new_segment}`}>
                    <div className="cl-circle-icon-container"><FontAwesomeIcon icon={faCircle} color="#e6e8eb" /></div>
                    <SelectField options={availableOptions} value={activeSchema} onChange={onChangeActiveSchema} placeholder="Add schema to the segment"/>
                    <Button disabled className="cl-delete-btn">
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                </div>
                <div className="cl-add-new-schema-container"><AnchorButton disabled={!activeSchema} onClick={onClickAddNewSchema} icon={'+'}>Add new schema</AnchorButton></div>
            </div>
        </React.Fragment>
    );
};

export default SegmentSaver;