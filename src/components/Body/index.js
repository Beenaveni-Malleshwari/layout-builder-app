import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  renderLeftNavbar() {
    return (
      <div className="left-navbar">
        <h2>Left Navbar Menu</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    )
  }

  renderContent() {
    return (
      <div className="content">
        <h2>Main Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    )
  }

  renderRightNavbar() {
    return (
      <div className="right-navbar">
        <h2>Right Navbar</h2>
        <p>Ad 1</p>
        <p>Ad 2</p>
      </div>
    )
  }

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showLeftNavbar, showContent, showRightNavbar} = value

          return (
            <div className="body-container">
              {showLeftNavbar && this.renderLeftNavbar()}
              {showContent && this.renderContent()}
              {showRightNavbar && this.renderRightNavbar()}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
