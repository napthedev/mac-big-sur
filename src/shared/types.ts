export interface MenuItemType {
  label: string;
  children: (null | string)[];
}

export interface DockItemType {
  name: string;
  icon: string;
  type: "iframe" | "component" | "link";
  iframe?: string;
  link?: string;
}
