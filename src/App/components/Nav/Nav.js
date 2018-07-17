import React, { Component } from 'react'

import Parent from '../parent'
import styles from './Nav.less'

class Nav extends Component {
  render() {
    return (
        <nav className={styles.Nav}>
          {this.props.content.map(item => {
            // create a Parent for each object in the array
            // parents render children if present
            return <Parent {...item} key={item.title} selected={this.props.selected} />
          })}
        </nav>
    )
  }
}

export default Nav
