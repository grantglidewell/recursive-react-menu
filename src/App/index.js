import React, { Component } from 'react'
import Nav from './components/Nav'

import './styles.less'

export default class App extends Component {
  state = {
    selected: ''
  }
  componentDidMount() {
    this.setState({ selected: window.location.href.split('/').pop() })
  }
  render() {
    return (
      <main>
        <Nav content={content} selected={this.state.selected} />
        <h1>{window.location.href.split('/').pop()}</h1>
      </main>
    )
  }
}

const content = [
  {
    title: 'PAGES',
    icon: 'file-o',
    children: [
      {
        name: 'Simple Page',
        ZUID: 'as4da-asdads-ds4a',
        icon: 'bars'
      },
      {
        name: 'Homepage',
        ZUID: 'asda-asda4ds-dsa',
        icon: 'bars',
        children: [
          { name: 'child', ZUID: '252n0-23n452', icon: 'cube' },
          {
            name: 'WWWWWWWWWWWWWWWWWWWW',
            ZUID: '4898-44646-12341234',
            icon: 'cube',
            children: [
              {
                name: 'child',
                ZUID: '8238-235325ads-ewew',
                icon: 'cube',
                children: [
                  { name: 'burried', ZUID: '89234djns23u80', icon: 'cube' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'PAGE GROUPS',
    icon: 'files-o',
    children: []
  },
  {
    title: 'DATA SETS',
    icon: 'database',
    children: [
      {
        name: 'Clippings',
        ZUID: 'asda-asd5ads-dsa',
        icon: 'bars'
      },
      { name: 'Dashboard Widgets', ZUID: 'asda-aesdads-dsa', icon: 'bars' },
      { name: 'Sidebar Contact Form', ZUID: 'asda-asdsdads-dsa', icon: 'bars' }
    ]
  }
]
