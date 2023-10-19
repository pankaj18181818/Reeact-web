import React from "react";
import BarChart from "react-bar-chart";
function Barchart() {
  const data = [
    { text: "Jan", value: 20 },
    { text: "Feb", value: 10 },
    { text: "Mar", value: 70 },
    { text: "April", value: 0 },
    { text: "May", value: 20 },
    { text: "June", value: 0 },
    { text: "July", value: 0 },
    { text: "Aug", value: 100 },
    { text: "Sep", value: 20 },
    { text: "Oct", value: 40 },
    { text: "Nov", value: 0 },
    { text: "Dec", value: 0 },
  ];

  const margin = { top: 40, right: 20, bottom: 30, left: 50 };

  return (
        <BarChart
          // ylabel="Quantity"
          width={500}
          height={250}
          margin={margin}
          data={data}
        />
  );
}

export default Barchart;
