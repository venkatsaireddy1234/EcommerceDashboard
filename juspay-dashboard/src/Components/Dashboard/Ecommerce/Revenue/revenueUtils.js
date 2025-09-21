export function getRevenueChartConfig() {
  return {
    yLabels: ["30M", "20M", "10M", "0M"],
    yTicks: [30, 20, 10, 0],
    data: [
      { name: "Jan", actuals: 10, projections: 28 },
      { name: "Feb", actuals: 22, projections: 20 },
      { name: "Mar", actuals: 28, projections: 10 },
      { name: "Apr", actuals: 22, projections: 20 },
      { name: "May", actuals: 10, projections: 28 },
      { name: "Jun", actuals: 18, projections: 24 },
    ],
  };
}