"use client";

import { Datepicker } from "flowbite-react";

export default function DatePicker() {
  const handleDateChange = (date: Date) => {
    console.log("Date : " + date);
  };

  return (
    <>
      <Datepicker
        autoHide={true}
        onSelectedDateChanged={(date) => handleDateChange(date)}
        style={{
          height: "60px",
          width: "220px",
          borderRadius: "50px",
          backgroundColor: "#d9d9d9",
          fontSize: "14pt",
          cursor: "pointer",
        }}
      />
    </>
  );
}
