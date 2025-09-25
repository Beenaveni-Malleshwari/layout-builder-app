import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext' // ✅ import Context

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
    onToggleShowLeftNavbar: () => {},
    onToggleShowContent: () => {},
    onToggleShowRightNavbar: () => {},
  }

  onToggleShowLeftNavbar = leftNvaber => {
    this.setState({showLeftNavbar: leftNvaber})
  }

  onToggleShowContent = context => {
    this.setState({showContent: context})
  }

  onToggleShowRightNavbar = rightnavber => {
    this.setState({showRightNavbar: rightnavber})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
