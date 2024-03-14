import { useState } from 'react'
import TreeDropdown from './componenets/TreeDropdown'
import { TreeItem } from './interface.type'


function App() {
  const [selectedItem, setSelectedItem] = useState([]);

  const data = [
    {
      label: 'Parent 1',
      value: 'parent1',
      children: [
        { label: 'Child 1', value: 'child1' },
        { label: 'Child 2', value: 'child2' }
      ]
    },
    {
      label: 'Parent 2',
      value: 'parent2',
      children: [
        { label: 'Child 3', value: 'child3', children: [{ label: 'Grandchild 1', value: 'grandchild1' }] },
        { label: 'Child 4', value: 'child4', children: [{ label: 'Grandchild 2', value: 'grandchild2' }] }
      ]
    }
  ];

  const handleSelect = (item:TreeItem) => {
    setSelectedItem(item);
    console.log(selectedItem)
  };

  return (
    <div className="app">
      <h1>Tree Dropdown Example</h1>
      <TreeDropdown data={data} onSelect={handleSelect} />
      <h2>Selected item: {selectedItem ? 
      <>
      {selectedItem&& selectedItem.length && selectedItem.map(
        function(item) {
          return <span>{item.label}</span>
        }
      )}
      </>
      : 'None'}</h2>
    </div>
  );
}

export default App
