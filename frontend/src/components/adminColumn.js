//column for moderators
import Button from "@mui/material/Button";
import "../App.css";

const adminColumn = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Authors",
    accessor: "authors",
  },
  {
    Header: "Source",
    accessor: "source",
  },
  {
    Header: "Pub. Year",
    accessor: "publishYear",
  },
  {
    Header: "DOI",
    accessor: "doi",
  },
  {
    Header: "SePractice",
    accessor: "sePractice",
  },
  {
    Header: "Delete",
    accessor: "delete",
    Cell: (row) => (
      <div className="deleteButton">
        <Button style={{
            backgroundColor: "#e11e26",
            fontSize: "12px",
          }}variant="contained">Reject</Button>
      </div>
    ),
  },
];

export default adminColumn;
