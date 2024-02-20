import React from 'react';

const EditableTableComponent = ({ data, onDataChange }) => {
  const handleDataChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    onDataChange(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Index</th>
          <th>Stocks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.timestamp}</td>
            <td contentEditable onBlur={(e) => handleDataChange(index, 'index', e.target.innerText)}>{item.index}</td>
            <td contentEditable onBlur={(e) => handleDataChange(index, 'stocks', e.target.innerText)}>{item.stocks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTableComponent;
