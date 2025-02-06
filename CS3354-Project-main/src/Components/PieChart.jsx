import { Chart } from "react-google-charts";

const PieChart = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    is3D: true, // Enables 3D view
    pieStartAngle: 100, // Rotates the chart
    legend: {
      position: "bottom left",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 20,
        fontName: "Arial",
        bold: true,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
    chartArea: { width: "100%", height: "90%" },
    fontSize: 16,
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"700px"}
      height={"400px"}
    />
  );
};

export default PieChart;
