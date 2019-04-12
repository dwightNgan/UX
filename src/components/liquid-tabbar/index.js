import React, { Component } from 'react';
import SVG from '../liquid-svg'
import './index.scss'


class LiquidTabbar extends Component {
  state = {
    tabs: [
      { icon: 'shopping-cart', txt: 'CART' },
      { icon: 'user', txt: 'USER' },
      { icon: 'gift', txt: 'GIFT' },
      { icon: 'comment', txt: 'MSG' },
    ],
    tabIndex: 0,
    showDrop: true
  }
  tabClick (tabIndex) {
    this.setState({ tabIndex, showDrop: true })
  }
  hideDrop () {
    this.setState({ showDrop: false })
  }
  render () {
    const { tabIndex, showDrop, tabs } = this.state
    return (
      <div className="liquid-tabbar">
        <div className="drop-effect" style={{left: 25 * tabIndex + '%'}}>
          {showDrop && <SVG />}
        </div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={tabIndex === index ? 'icon-active' : ''}
            onClick={() => this.tabClick(index)}
            onAnimationEnd={() => this.hideDrop()}
          >
            <span className={`fa fa-${tab.icon}`}></span>
            <div>{tab.txt}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default LiquidTabbar