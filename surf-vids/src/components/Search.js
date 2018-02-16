import React, { Component } from 'react';

export default class Search extends Component {
  static defaultProps = {
    disabled: false,
    type: 'text',
    onChange: () => {},
  };

  state = {
    hasContent: this.props.value || this.props.defaultValue || false,
  };

  _handleClose = evt => {
    if (!this.props.value) {
      this.input.value = '';
      this.props.onChange(evt);
    } else {
      const clearSearch = Object.assign({}, evt.target, {
        target: {
          value: '',
        },
      });
      this.props.onChange(clearSearch);
    }

    this.setState({ hasContent: false }, () => this.input.focus());
  };

  _handleChange = evt => {
    this.setState({
      hasContent: evt.target.value !== '',
    });
  }

  render() {
    return (
      <div className="sv--search">
        <label htmlFor='search' className="sv--search__label"></label>
        <input
          className="sv--search__input"
          placeholder='Search'
          onChange={this._handleChange}
          ref={ input => { this.input = input; } } />
        <span className="sv--search__underline"></span>
        {this.state.hasContent && (
          <svg className="sv--search-close" width="16" height="16" onClick={this._handleClose}>
            <path fill="none" d="M15 1l-.98.98L1 15zM1 1l.98.98L15 15z"/>
          </svg>
        )}
      </div>
    );
  }
}
