import React, { useState } from 'react';
import TreeNode from './TreeNode';
import { TreeItem, TreeDropdownProps } from './interface.type'

const TreeDropdown: React.FC<TreeDropdownProps> = ({ data, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<TreeItem[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterText] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: TreeItem) => {
    console.log('handleSelect', item)
    const index = selectedItems.findIndex((selectedItem) => selectedItem.value === item.value);
    if (index !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    console.log(selectedItems)
  };

  const handleConfirm = () => {
    setIsOpen(false);
    onSelect(selectedItems);
  };

  const filteredData = data.filter((item) => {
    if (!filterText) return true;
    if (item.label.toLowerCase().includes(filterText.toLowerCase())) return true;
    if (item.children) {
      const filteredChildren = item.children.filter((child) => child.label.toLowerCase().includes(filterText.toLowerCase()));
      return filteredChildren.length > 0;
    }
    return false;
  });

  return (
    <div className="tree-dropdown">
      <div className="selected-item" onClick={toggleDropdown}>
        {selectedItems.length > 0 ? selectedItems.map((item) => item.label).join(', ') : 'Select...'}
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-container">
          <ul className="dropdown-list">
            {filteredData.map((item) => (
              <TreeNode key={item.value} item={item} isSelected={selectedItems.some((selectedItem) => selectedItem.value === item.value)} onSelect={handleSelect} />
            ))}
          </ul>
          <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default TreeDropdown;
