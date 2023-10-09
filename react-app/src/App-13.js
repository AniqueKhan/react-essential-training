import "./App.css";
import { useState, useEffect } from "react";
const tahoe_peaks = [
  { name: "Test1", elevation: 12345 },
  { name: "Test2", elevation: 76512 },
  { name: "Test3", elevation: 98712 },
];
// const tahoe_peaks = [];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>The list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;
