import React from 'react'

const ConfigurationContext = React.createContext({
  showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  onToggleShowLeftNavbar: () => {},
  onToggleShowContent: () => {},
  onToggleShowRightNavbar: () => {},
})

export default ConfigurationContext
