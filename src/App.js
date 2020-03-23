import React from 'react';
import './App.css';

const App = () => {
  let point;
  let rows = [];

  while (true) {
    point = Number(prompt('Enter your point'));
    if (isNaN(point)) break;
    if (point >= 80) {
      rows.push({ point, grade: 'A' });
    } else if (point >= 70 && point < 80) {
      rows.push({ point, grade: 'B' });
    } else if (point >= 60 && point < 70) {
      rows.push({ point, grade: 'C' });
    } else if (point >= 50 && point < 60) {
      rows.push({ point, grade: 'D' });
    } else {
      rows.push({ point, grade: 'F' });
    }
  }

  const handleDelete = e => {
    e.preventDefault();
    let row = e.target.parentNode.parentElement;
    row.remove();
  };

  const renderTable = () => {
    return rows.map((row, idx) => {
      let { point, grade } = row;
      return (
        <tr key={idx}>
          <td>{point}</td>
          <td>{grade}</td>
          <td>
            <button onClick={handleDelete}>DELETE</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Score Table</h1>
      <table>
        <thead>
          <tr>
            <th>Your point</th>
            <th>Your grade</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default App;
