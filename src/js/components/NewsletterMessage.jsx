import React from 'react';
import classNames from 'classnames';
import './NewsletterMessage.scss';

const NewsletterMessage = React.createClass({
  getInitialState: function () {
    return {};
  },
  render: function () {
    const classes = classNames({
      'newsletter-message': true,
      '-type-error': this.props.type == 'error',
      '-type-success': this.props.type == 'success'
    });
    return (
      <p className={classes}>{this.props.message}</p>
    );
  }
});

module.exports = NewsletterMessage;