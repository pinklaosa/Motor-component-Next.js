import { DataGrid } from "@mui/x-data-grid";

const Table = (props) => {
  let { data, col } = props;
  //   const col = Object.keys(data[0]);
  let columns = col.map((d,i) => {
    return {
      field: d,
      headerName: d,
      width: 120,
    };
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={data} columns={columns} pageSize={50} />
    </div>
  );
};

export default Table;
