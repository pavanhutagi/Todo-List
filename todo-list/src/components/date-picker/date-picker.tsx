"use client";

import "./styles.css";

import { Datepicker } from "flowbite-react";
import { useDispatch } from "react-redux";
import { selectedDateAction } from "@/store/slices/commonSlice";

export default function DatePicker() {
  const dispatch = useDispatch();

  const handleDateChange = (date: Date) => {
    dispatch(selectedDateAction(date.toDateString()));
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
