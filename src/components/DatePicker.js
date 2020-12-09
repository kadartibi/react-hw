import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";


export default function DatePicker() {
  const [selectedBirthdate, handleBirthdateChange] = useState(
    new Date()
  );

  return (
    <Fragment>
      <h3>Enter your birthdate:</h3>
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