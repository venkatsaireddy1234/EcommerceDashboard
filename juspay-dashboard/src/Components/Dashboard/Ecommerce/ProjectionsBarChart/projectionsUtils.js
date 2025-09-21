export function getBarChartConfig() {
  return {
    yLabels: ["30M", "20M", "10M", "0"],
    yTicks: [0, 40, 90, 135],
    xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [
      { name: "Jan", actuals: 34, projections: 68 },
      { name: "Feb", actuals: 38, projections: 80 },
      { name: "Mar", actuals: 30, projections: 60 },
      { name: "Apr", actuals: 40, projections: 80 },
      { name: "May", actuals: 22, projections: 44 },
      { name: "Jun", actuals: 40, projections: 100 },
    ],
  };
}