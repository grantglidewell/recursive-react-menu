import React, { Component } from 'react'
import { Nav } from './Nav'

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
        path: 'nav/as4da-asdads-ds4a',
        icon: 'bars'
      },
      {
        name: 'Homepage',
        path: 'nav/asda-asda4ds-dsa',
        icon: 'bars',
        children: [
          { name: 'child', path: 'nav/252n0-23n452', icon: 'cube' },
          {
            name: 'homepages',
            path: 'nav/4898-44646-12341234',
            icon: 'cube',
            children: [
              {
                name: 'child',
                path: 'nav/8238-235325ads-ewew',
                icon: 'cube'
              },
              {
                name: 'child',
                path: 'nav/8238-235asd25ads-ewew',
                icon: 'cube',
                children: [
                  { name: 'buried', path: 'nav/89234djns23u80', icon: 'cube' }
                ]
              },
              {
                name: 'node',
                path: 'nav/238-4562346',
                icon: 'cube'
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
        path: 'nav/asda-asd5ads-dsa',
        icon: 'bars'
      },
      { name: 'Dashboard Widgets', path: 'nav/asda-aesdads-dsa', icon: 'bars' },
      {
        name: 'Sidebar Contact Form',
        path: 'nav/asda-asdsdads-dsa',
        icon: 'bars'
      }
    ]
  },
  {
    title: 'MORE PAGES',
    icon: 'file-o',
    children: [
      {
        name: 'Simple Page',
        path: 'nav/as4da-asda3ds-ds4a',
        icon: 'bars'
      },
      {
        name: 'Homepage',
        path: 'nav/asda-asd3a4ds-dsa',
        icon: 'bars',
        children: [
          { name: 'child', path: 'nav/2523n0-23n452', icon: 'cube' },
          {
            name: 'homepages',
            path: 'nav/4898-443646-12341234',
            icon: 'list',
            children: [
              {
                name: 'child',
                path: 'nav/8238-2353325ads-ewew',
                icon: 'list'
              },
              {
                name: 'child',
                path: 'nav/8238-2353asd25ads-ewew',
                icon: 'list',
                children: [
                  { name: 'buried', path: 'nav/892334djns23u80', icon: 'list' }
                ]
              },
              {
                name: 'child',
                path: 'nav/8238-235213325ads-ewew',
                icon: 'list'
              },
              {
                name: 'child',
                path: 'nav/8238-221353asd25ads-ewew',
                icon: 'cube',
                children: [
                  {
                    name: 'buried',
                    path: 'nav/892334d12jns23u80',
                    icon: 'cube'
                  }
                ]
              },
              {
                name: 'node',
                path: 'nav/238-45632346',
                icon: 'cube'
              }
            ]
          }
        ]
      }
    ]
  }
]
