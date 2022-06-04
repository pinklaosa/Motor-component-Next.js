import ReactEcharts from "echarts-for-react";
const Bar = (props) => {
  const { style, data } = props;
  let support = data.map((d) => d["support"]);
  let name = data.map((d) => d["item_name"]);
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    title: {
      text: "The most popular products and services",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: name,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: support,
        type: "bar",
      },
    ],
  };

  return <ReactEcharts option={option} style={style} />;
};
export default Bar;
