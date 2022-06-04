import ReactEcharts from "echarts-for-react";

const PieChart = (props) => {
  let { style,data, des } = props;
  if(des != undefined){
      data = data.map(d => {
          return{
              value:Math.floor(d["support"] * 100),
              name:d["item_name"],
          }
      })
  }
  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      show: des ? false : true
    },
    series: [
      {
        name: "Support",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data
      },
    ],
  };
  return <ReactEcharts option={option} style={style} />;
};
export default PieChart;
