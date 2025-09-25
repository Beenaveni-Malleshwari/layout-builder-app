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
          <h1>Layout</h1>
          <label>
            <input
              type="checkbox"
              checked={showContent}
              className="checkbox"
              onChange={() => onToggleShowContent(!showContent)}
            />
            Content
          </label>
          <label>
            <input
              type="checkbox"
              checked={showLeftNavbar}
              className="checkbox"
              onChange={() => onToggleShowLeftNavbar(!showLeftNavbar)}
            />
            Left Navbar
          </label>
          <label>
            <input
              type="checkbox"
              checked={showRightNavbar}
              className="checkbox"
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
