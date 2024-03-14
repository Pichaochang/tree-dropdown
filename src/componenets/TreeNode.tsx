// TreeNode.tsx
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TreeItem, TreeNodeProps } from './interface.type'

const TreeNode: React.FC<TreeNodeProps> = ({ item, isSelected, onSelect }) => {
  const handleClick = (event:MouseEvent) => {
		event.stopPropagation()
    onSelect(item);
  };

  return (
    <li onClick={handleClick} className={isSelected ? 'selected' : ''}>
      {item.label}
      {item.children && (
        <ul>
          {item.children.map((child) => (
            <TreeNode key={child.value} item={child} isSelected={isSelected} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
