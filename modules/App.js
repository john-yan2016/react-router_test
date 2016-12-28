import React from 'react'
import { IndexLink, Link } from 'react-router'
 
export default React.createClass({
  render() {
    return (
      <div>
        <h1>性别</h1>
        <ul role="nav">
		  <li><IndexLink to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
          <li><Link to="/boys" activeStyle={{ color: 'red' }}>男</Link></li>
          <li><Link to="/girls" activeStyle={{ color: 'red' }}>女</Link></li>
        </ul>
		
		{this.props.children}
      </div>
    )
  }
})