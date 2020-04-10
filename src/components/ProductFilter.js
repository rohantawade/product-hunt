import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductState";
import { Select, MenuItem } from "@material-ui/core";

export const ProductFilter = () => {
  const { filterProducts } = useContext(ProductContext);
  const [selectedDate, setselectedDate] = useState(0);

  const daysProvider = [
    { key: 1, value: 0, label: "Today" },
    { key: 2, value: 1, label: "Yesterday" },
    { key: 3, value: 2, label: "2 days ago" },
    { key: 4, value: 3, label: "3 days ago" },
  ];
  const dateChangeHandler = (e) => {
    setselectedDate(e.target.value);
    filterProducts(selectedDate);
  };

  useEffect(() => {
    filterProducts(selectedDate);
  }, []);

  return (
    <div>
      <Select
        value={selectedDate}
        onChange={dateChangeHandler}
        style={{ minWidth: 300 }}
      >
        {daysProvider.map((day) => (
          <MenuItem key={day.key} value={day.value}>
            {day.label}
          </MenuItem>
        ))}
      </Select>
      {/* <input type="text" placeholder="search product.."></input> */}
    </div>
  );
};
