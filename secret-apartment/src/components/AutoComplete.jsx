import * as React from "react";
import { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { GlobalContext } from "../context/global-context";

export default function AutoCompleteInput() {
  const { setNeighborhoods } = useContext(GlobalContext);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(e) => setNeighborhoods(e.target.innerText)}
      options={neighborhoodsNames}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Enter Neighborhood Name" />
      )}
    />
  );
}

const neighborhoodsNames = [
  { label: "Bloomington Heights" },
  { label: "Bluestem" },
  { label: "Briardale" },
  { label: "Brookside" },
  { label: "Clear Creek" },
  { label: "College Creek" },
  { label: "Crawford" },
  { label: "Edwards" },
  { label: "Gilbert" },
  { label: "Iowa DOT and Rail Road" },
  { label: "Meadow Village" },
  { label: "Mitchell" },
  { label: "North Ames" },
  { label: "Northridge" },
  { label: "Northpark Villa" },
  { label: "Northridge Heights" },
  { label: "Northwest Ames" },
  { label: "Old Town" },
  { label: "South & West of Iowa State University" },
  { label: "Sawyer" },
  { label: "Sawyer West" },
  { label: "Somerset" },
  { label: "Stone Brook" },
  { label: "Timberland" },
  { label: "Veenker" },
];
