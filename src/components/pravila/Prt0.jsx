import React, { Component } from 'react'
import './pr.css'
export default class Prt0 extends Component {
  render() {
    return (
      <li className='listitem category-pr voise-pr'>
        {this.props.voiseName}
      </li>
    )
  }
}
