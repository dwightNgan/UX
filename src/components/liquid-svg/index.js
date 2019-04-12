import React, { Component } from 'react';
import './index.scss'


class LiquidSVG extends Component {
  render () {
    return (
      <svg width="260px" height="89px" viewBox="0 0 260 89" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path id="liquid" fill="#0495FF" fillRule="nonzero">
          <animate
            attributeName="d"
            values="
              M129.99653,0.5 C157.332177,0.5 200.666667,0.5 260,0.5 L0,0.5 C59.3333333,0.5 102.66551,0.5 129.99653,0.5 Z;
              M129.99653,44 C156.66551,18 200,3.33333333 260,0 L0,0 C60,3.33333333 103.332177,18 129.99653,44 Z;
              M129.99653,0.5 C157.332177,0.5 200.666667,0.5 260,0.5 L0,0.5 C59.3333333,0.5 102.66551,0.5 129.99653,0.5 Z
            "
            keyTimes="0; 0.36; 1"
            dur="1s"
          />
        </path>
        <path id="drop-1" stroke="#0495FF" strokeWidth="3" fillRule="nonzero" d="M129.99653,48 L129.99653,53 z"></path>
        <path id="drop-2" stroke="#0495FF" strokeWidth="2" fillRule="nonzero" d="M129.99653,44 L129.99653,89 z"></path>
      </svg>
    )
  }
}

export default LiquidSVG