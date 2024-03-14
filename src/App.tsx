import { useState } from "react";
import TreeDropdown from "./componenets/TreeDropdown";
import { TreeItem } from "./interface.type";

function App() {
  const [selectedItem, setSelectedItem] = useState([]);
  const data = [
    {
      id: 2,
      name: "北京",
      children: [
        { id: 3, name: "朝阳区" },
        { id: 4, name: "海淀区" },
      ],
    },
    {
      id: 5,
      name: "上海",
      children: [
        { id: 6, name: "浦东新区" },
        { id: 7, name: "黄浦区" },
      ],
    },
  ];

  const handleSelect = (item: TreeItem) => {
    setSelectedItem(item);
    console.log(selectedItem);
  };

  return (
    <div className="app">
      <h1>Tree Dropdown Example</h1>
      <TreeDropdown data={data} onSelect={handleSelect} />
      <h2>
        Selected item:{" "}
        {selectedItem ? (
          <>
            {selectedItem &&
              selectedItem.length &&
              selectedItem.map(function (item) {
                return <span>{item.name}</span>;
              })}
          </>
        ) : (
          "None"
        )}
      </h2>
    </div>
  );
}

export default App;
