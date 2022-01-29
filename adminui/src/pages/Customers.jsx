import React from "react";
import Table from "../components/table/Table";
import customerList from "../assets/JsonData/customers-list.json";

let customerTableHead = [];
if (customerList.length) {
  customerTableHead = [...Object.keys(customerList[0])];
}
const Customers = () => {
  return (
    <div>
      <h2 className="page-header">customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit={10}
                headData={customerTableHead}
                bodyData={customerList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
