import React from 'react'

import styles from './Node.less'

const Node = props => {
  // find a way to dynamically render an icon, switch to match Node type?
  // maybe need to check the nav bar to see if this is active?
  return (
    <li
      className={`${styles.item} ${props.active &&
        styles.active}`}
      key={props.ZUID}>
      <a href={`/${props.ZUID}`}>
        <i
          className={`fa fa-${props.icon} ${props.selected === props.ZUID &&
            styles.selected}`}
        />{' '}
        <p>{props.name}</p>
      </a>
      {props.children && (
        <i
          className={props.closed ? 'fa fa-chevron-down' : 'fa fa-chevron-left'}
          onClick={() => props.handleOpen(props.ZUID)}
        />
      )}
    </li>
  )
}

export default Node
