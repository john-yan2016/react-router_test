import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
   // ask for <code>router</code> from context
  contextTypes: {
    router: React.PropTypes.object
  },	
  // add this method
  handleSubmit(event) {
    event.preventDefault()
    const boyName = event.target.elements[0].value
    const path = `/boys/${boyName}`
    this.context.router.push(path)
  },
  render() {
    return (
      <div>
        <h2>我的男神们：</h2>
        <ul>
          <li><Link to="/boys/宋仲基" activeStyle={{ color: 'red' }}>宋仲基</Link></li>
          <li><Link to="/boys/吴亦凡" activeStyle={{ color: 'red' }}>吴亦凡</Link></li>
		  <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="boyName"/> / {' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
		{this.props.children}
      </div>
    )
  }
})