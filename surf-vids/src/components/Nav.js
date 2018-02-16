import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="sv--nav">
        <header className="sv--nav-header">
          <a className="sv--nav-link" href='#'>
            <h1 className="sv--nav-title">Surf's Up</h1>
          </a>
        </header>
      </div>
    );
  }
}
