import Navbar from "../../components/navbar";
import { useState, useEffect } from "react";
import Head from "next/head";
import ReactEcharts from "echarts-for-react";
import PieChart from "../../components/pie";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "axios";
import Table from "../../components/table";
import Bar from "../../components/bar";
import MultiBar from "../../components/multibar";

const About = () => {
  const [dataRFM, setDataRFM] = useState([]);
  const [dataAsso, setDataAsso] = useState([]);
  const [dataFreq, setDataFreq] = useState([]);
  const [pie, setPie] = useState([]);

  let pieData = [
    { value: 9003, name: "Other Customers" },
    { value: 544, name: "Top Customers" },
  ];

  useEffect(() => {
    Axios.get("http://localhost:3001/rfm").then((res) => {
      if (res.data.status === 200) {
        setDataRFM(res.data.result);
      }
    });
    Axios.get("http://localhost:3001/association").then((res) => {
      if (res.data.status === 200) {
        setDataAsso(res.data.result);
        res.data.result.forEach((d) => {
          d["confidence"] = Math.floor(d["confidence"] * 100);
          d["support"] = Math.floor(d["support"] * 100);
        });
      }
    });
    Axios.get("http://localhost:3001/freq").then((res) => {
      if (res.data.status === 200) {
        setDataFreq(res.data.result);
        res.data.result.forEach((d) => {
          d["support"] = Math.floor(d["support"] * 100);
        });
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className="">
        <div
          className=" py-24 flex flex-col m-auto items-center rounded-b-3xl shadow-md 
        bg-gradient-to-r from-sky-600 to-indigo-800 "
        >
          <h2 className="text-4xl text-white font-bold"> About us </h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold pt-10 pl-24">RFM</h2>
          <div className="border-2 border-indigo-400 mx-20 mt-4 bg-indigo-400"></div>
          <div className="flex flex-row mx-20">
            <div className="w-1/2">
              <PieChart
                style={{ width: "100%", height: "80vh" }}
                data={pieData}
              />
            </div>
            <div className="w-1/2 mt-20">
              <Table
                data={dataRFM}
                col={["id", "customer", "recency", "frequency", "monetary"]}
              />
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold pt-10 pl-24">Association</h2>
            <div className="border-2 border-green-500 mx-20 mt-4 bg-green-500 mb-24"></div>
          </div>
          <div className="flex flex-col">
            <Bar data={dataFreq} style={{ width: "100%", height: "80vh" }} />
            <div className="flex flex-row mx-10">
              <div className="w-1/2">
                <PieChart
                  style={{ width: "100%", height: "80vh" }}
                  data={dataFreq}
                  des={true}
                />
              </div>
              <div className="w-1/2 mx-24 py-5">
                <Table
                  data={dataFreq}
                  col={["id", "item_id", "item_name", "support"]}
                />
              </div>
            </div>

            <div className="px-14 mt-10">
              <MultiBar
                style={{ width: "100%", height: "80vh" }}
                data={dataAsso}
              />
            </div>
            <div className="h-96 px-24">
              <Table
                data={dataAsso}
                col={["id", "item_1", "item_2", "support", "confidence"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
