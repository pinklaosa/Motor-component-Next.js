import ReactEcharts from "echarts-for-react";

const MultiBar = (props) => {
  const { data, style } = props;
  let x = data.map((d) => d["item_1"] + " - " + d["item_2"]);
  let legend = ["Support", "Confidence"];
  let series = legend.map((d) => {
    return {
      name: d,
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: data.map((t) => t[d.toLowerCase()]),
    };
  });
  console.log(series);
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: legend,
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar", "stack"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: x,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: series,
  };
  return <ReactEcharts option={option} style={style} />;
};
export default MultiBar;
