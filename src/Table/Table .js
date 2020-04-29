import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

const Table = ({ onSort, data, sortField, sort, onRowSelect }) => {
  //   console.log(data);
  const arrowSort =
    sort === "asc" ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("id")}>
            ID {sortField === "id" ? arrowSort : <FaLongArrowAltUp />}
          </th>
          <th onClick={() => onSort("firstName")}>
            First Name{" "}
            {sortField === "firstName" ? arrowSort : <FaLongArrowAltUp />}
          </th>
          <th onClick={() => onSort("lastName")}>
            Last Name {sortField === "lastName" ? arrowSort : null}
          </th>
          <th onClick={() => onSort("email")}>
            Email {sortField === "email" ? arrowSort : null}
          </th>
          <th onClick={() => onSort("phone")}>
            Phone {sortField === "phone" ? arrowSort : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id + item.phone}
            onClick={() => {
              onRowSelect(item);
            }}
          >
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
