import * as React from "react";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

// const columns = [
//   {
//     field: 'date',
//     headerName: 'Year',
//     width: 150,
//     renderCell: (params) => (
//       <strong>
//         {params.value.getFullYear()}
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           style={{ marginLeft: 16 }}
//         >
//           Open
//         </Button>
//       </strong>
//     ),
//   },
// ];

const columns = [
  {
    field: "id",
    headerName: "ID",
    hide: true,
  },

  {
    field: "timeslotavailable",
    headerName: "Time Slots",
    width: 300,

    renderCell: (params) => {
      let result = [];
      let ii;
      for (ii = 0; ii < params.row.timeSlotAvailable.length; ii++) {
        result.push(
          params.row.timeSlotAvailable[ii]["Slot-Start-Time"] +
            " " +
            "-" +
            " " +
            params.row.timeSlotAvailable[ii]["Slot-End-Time"]
        );
      }
      return (
        <div
          style={{
            fontSize: 10,
            width: "100%",
            textAlign: "right",
          }}
        >
          <RadioGroup name="time_slot">
            {result.map((r, i) => {
              return (
                <FormControlLabel
                  name="radio-button-demo"
                  value={r}
                  control={<Radio />}
                  label={r}
                  id={i}
                />
              );
            })}
          </RadioGroup>
        </div>
      );
    },
  },
];

let rows = [
  {
    id: 1,
    timeSlotAvailable: [
      { "Slot-Start-Time": "02:12:54", "Slot-End-Time": "01:12:56" },
      { "Slot-Start-Time": "03:12:54", "Slot-End-Time": "04:12:56" },
    ],
  },
];

const TestGrid = () => {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default TestGrid;
