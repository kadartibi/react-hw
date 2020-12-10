import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useCookies } from 'react-cookie';


export default function DatePicker() {
    const [cookies, setCookie] = useCookies();
    const [selectedBirthdate, setSelectedBirthdate] = useState(new Date());
    const calculate_age = (date) => {
        let today = new Date();
        let birthDate = new Date(date);
        let age_now = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        return age_now;
    }
    const handleBirthdateChange = (birthdate)=>{
        setCookie('Age', calculate_age(birthdate), { path: '/' });
        setSelectedBirthdate(birthdate);
    }

    return (
        <Fragment>
        <h3>Enter your birthdate for some possible discount:</h3>
        <br />
        <KeyboardDatePicker
            clearable
            value={selectedBirthdate}
            onChange={date => {
                handleBirthdateChange(date);
            }}
            format="dd/MM/yyyy"
        />
        </Fragment>
  );
}