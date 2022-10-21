import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate } from "react-router-dom";

const Reserve = ({ place }) => {
  const { location } = place;
  const [value, setValue] = React.useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className=" py-6 rounded-md border-2 border-violet-600">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 text-sm"
        action=""
      >
        <label className="">
          <div className="flex justify-between">
            <span className="text-gray-700 dark:text-neutral-200 text-start">
              Origin
            </span>
          </div>
          <input
            type="text"
            name="text"
            className="block w-96 border border-violet-400 focu bg-white rounded text-sm font-normal h-11 px-4 py-3 mt-1 outline-none"
            placeholder="Where you from ?"
          />
        </label>
        <label className="">
          <div className="flex justify-between">
            <span className="text-gray-700 dark:text-neutral-200 text-start">
              Destination
            </span>
          </div>
          <input
            defaultValue="Saint Martin's"
            // value={location}
            type="text"
            name="text"
            className="block w-96 border border-violet-400 focu bg-white rounded text-sm font-normal h-11 px-4 py-3 mt-1 outline-none"
            placeholder="Type you destination"
          />
        </label>
        <div className="flex justify-between w-96">
          <div className="w-44 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="From"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="w-44">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="To"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
        <button
          className=" bg-violet-700 relative h-auto inline-flex items-center justify-center rounded transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 
            text-white w-96 hover:bg-green-500 
            "
          type="submit"
        >
          Start Booking
        </button>
      </form>
    </div>
  );
};

export default Reserve;
