import React, { useState } from "react";
import SlideIn  from '../../Components/SlideIn';
import SegmentSaver from "../SegmentSaver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Button from "../../Components/Button";
import { doPost } from "../../Utils/fetchWrapper";
const Dashboard = () => {
    const [showSlideIn, setShowSlideIn] = useState(false);
    const options = [
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Gender', value: 'gender'},
        {label: 'Age', value: 'age'},
        {label: 'Account Name', value: 'account_name'},
        {label: 'City', value: 'city'},
        {label: 'State', value: 'state'},
    ];

    const [name, setName] = useState('');
    const [schemas, setSchemas] = useState([]);

    const onClickSaveSegment = () => {
        const schemaConvert = schemas?.map(({ label, value }) => {
            const obj = {};
            obj[value] = label;
            return obj;
        })
        const postableData ={
            segment_name: name,
            schema: schemaConvert,
        };
        doPost('b72aab86-d4e0-4454-94a7-738e2eea5b5e', postableData).then((e) => {
            setName('');
            setSchemas([]);
            setShowSlideIn(false);
        }).catch((e) => {
            setName('');
            setSchemas([]);
            setShowSlideIn(false);
        });
    };

    const onClickOpen = () => {
        setShowSlideIn(true);
    }

    const onClickCancel = () => {
        setName('');
        setSchemas([]);
        setShowSlideIn(false);
    };
    return (
        <React.Fragment>
            <div className="cl-dashboard">
                <Button className="cl-slide-in-footer-save-btn" disabled={showSlideIn} onClick={onClickOpen}>Save segment</Button>
            </div>
            <SlideIn
                show={showSlideIn}
                header={
                    <React.Fragment>
                        <span className="cl-slide-in-header-icon"><FontAwesomeIcon icon={faAngleLeft} /></span>
                        <span className="cl-slide-in-header-title">Saving Segment</span>
                    </React.Fragment>
                }
                body={<SegmentSaver options={options} schemas={schemas} setSchemas={setSchemas} name={name} setName={setName}  />}
                footer={<React.Fragment>
                    <Button className="cl-slide-in-footer-save-btn" onClick={onClickSaveSegment}>Save the segment</Button>
                    <Button className="cl-slide-in-footer-cancel-btn" onClick={onClickCancel}>Cancel</Button>
                </React.Fragment>}
            />
        </React.Fragment>
    );
};

export default Dashboard;