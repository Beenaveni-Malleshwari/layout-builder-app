import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="controller-container">
          <h1>Layout Settings</h1>
          <label>
            <input
              type="checkbox"
              checked={showContent}
              onChange={() => onToggleShowContent(!showContent)}
            />
            Content
          </label>
          <label>
            <input
              type="checkbox"
              checked={showLeftNavbar}
              onChange={() => onToggleShowLeftNavbar(!showLeftNavbar)}
            />
            Left Navbar
          </label>
          <label>
            <input
              type="checkbox"
              checked={showRightNavbar}
              onChange={() => onToggleShowRightNavbar(!showRightNavbar)}
            />
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
