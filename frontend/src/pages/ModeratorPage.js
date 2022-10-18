import React, { useEffect, useState } from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import modColumn from "../components/modColumn";
import Dropdown from "../components/Dropdown.js";
import { SERVER_URL } from "../config";

const ModeratorPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [title, setTitle] = useState("");
  const [sePractice, setSePractice] = useState("");
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      SERVER_URL +
        `/api/articles?page=${page}&pageSize=${pageSize}&title=${title}&sePractice=${sePractice}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, [page, title, sePractice]);
  const handleSearch = ({ title, sePractice }) => {
    setTitle(title);
    setSePractice(sePractice);
  };
  return (
    <div>
      <h2>Moderator Page</h2>
      <Dropdown onSearch={handleSearch} />
      <Styles>
        <Table data={articles} columns={modColumn} />
      </Styles>
    </div>
  );
};

export default ModeratorPage;
