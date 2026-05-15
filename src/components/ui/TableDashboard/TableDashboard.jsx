import { Link } from "react-router-dom";

function TableDashboard({ title, addLabel, columns, rows }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h3>{title}</h3>
        <Link to="add" className="btn btn-primary">
          {addLabel}
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i} scope="col">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                j === 0
                  ? <th key={j} scope="row">{cell}</th>
                  : <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDashboard;
