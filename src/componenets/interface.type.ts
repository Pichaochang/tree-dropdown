export interface TreeItem {
  name: string;
  id: string;
  children?: TreeItem[];
}

export interface TreeDropdownProps {
  data: TreeItem[];
  onSelect: (items: TreeItem[]) => void;
}

export interface TreeNodeProps {
  item: TreeItem;
  isSelected: boolean;
  onSelect: (item: TreeItem) => void;
}
