import React from "react";
import styles from "./Node.less";

export function Node({
  active,
  selected,
  closed,
  collapsed,
  depth,
  path,
  icon,
  name,
  children,
  handleOpen
}) {
  // style if a node is active
  const isActive = (active && styles.active) || "";
  // style is a node is selected
  const isSelected = (selected === path && styles.selected) || "";
  // check if a parent node is collapsed
  const isClosed = closed && styles.closed;
  const isCollapsed =
    collapsed && collapsed.filter(collapsed => collapsed === path).length;
  return (
    <li
      className={`${styles.item} ${isActive} ${
        styles[`depth${depth}`]
      } ${isSelected} ${isClosed}`}
      key={path}
    >
      <a href={`/${path}`}>
        <i className={`fa fa-${icon}`} />
        <span>{name}</span>
      </a>
      {children && (
        <i
          className={isCollapsed ? "fa fa-caret-left" : "fa fa-caret-down"}
          onClick={() => handleOpen(path)}
        />
      )}
    </li>
  );
}
