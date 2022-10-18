<<<<<<< Updated upstream
const modColumn = [
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
        Header: "Action",
        accessor: "action",
      },
  ];
  
    module.exports = modColumn;
=======
//column for moderators
import Button from "@mui/material/Button";
import "../App.css";

const modColumn = [
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
    Header: "Action",
    accessor: "action",
    Cell: (row) => (
      <div className="deleteButton">
        <Button
          style={{
            fontSize: "12px",
            margin: "4px",
          }}
          variant="contained"
        >
          Accept
        </Button>
        <Button style={{
            backgroundColor: "#e11e26",
            fontSize: "12px",
          }}variant="contained">Reject</Button>
      </div>
    ),
  },
];

export default modColumn;
>>>>>>> Stashed changes
