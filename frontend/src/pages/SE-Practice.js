import React, {useEffect, useState} from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import {SERVER_URL} from "../config";
 
const SEPractice = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [articles, setArticles] = useState([]);
    useEffect(() => {
      fetch(SERVER_URL + `/api/articles?page=${page}&pageSize=${pageSize}`)
        .then(res => res.json())
        .then(data => {
          setArticles(data);
        })
    }, [page]);
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown />
        <Styles>
          <Table data={articles} columns={tablecolumns} />
        </Styles>
      </div>
    );
}
 
export default SEPractice;