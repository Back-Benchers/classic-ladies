import React, { useState } from "react";
import _ from "underscore";
import "./table.css";

const Table = ({ limit, headData, bodyData }) => {
  let [sortCustomerList, setSortCustomerList] = useState(bodyData);
  let [initDataShow, setInitDataShow] = useState(
    limit && sortCustomerList
      ? sortCustomerList.slice(0, limit)
      : sortCustomerList
  );
  const [dataShow, setDataShow] = useState(initDataShow);
  const [currPage, setCurrPage] = useState(0);
  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(sortCustomerList.length / limit);
    pages = sortCustomerList.length % limit === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
    console.log(pages, range);
  }

  const selectPage = (page) => {
    const start = limit * page;
    const end = start + limit;
    setDataShow(sortCustomerList.slice(start, end));
    setCurrPage(page);
  };
  const sortCustomerData = (sortType) => {
    sortCustomerList = _.sortBy(sortCustomerList, sortType);
    setSortCustomerList([...sortCustomerList]);
    initDataShow =
      limit && sortCustomerList
        ? sortCustomerList.slice(0, limit)
        : sortCustomerList;
    setInitDataShow([...initDataShow]);
    setDataShow(initDataShow);
  };
  const renderHead = (item, index) => (
    <th key={index}>
      {item.replace("_", " ")}
      <span
        onClick={() => sortCustomerData(item)}
        style={{ cursor: "pointer", marginLeft: "3px" }}
      >
        &#x21D5;
      </span>
    </th>
  );
  const renderBody = (item, index) => (
    <tr key={index}>
      {headData.map((label) => (
        <td>{item[label]}</td>
      ))}
    </tr>
  );
  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headData ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          {sortCustomerList ? (
            <tbody>
              {dataShow.map((item, index) => renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {pages > 1 ? (
        <div className="table__pagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item ${
                currPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
