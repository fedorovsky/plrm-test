import React from 'react';
import NewsletterEditor from './NewsletterEditor.jsx';
import NewsletterMessage from './NewsletterMessage.jsx';

var NewsletterApp = React.createClass({
  getInitialState: function () {
    return {
      showMessage: true,
      typeMessage: '',
      message: ''
    };
  },
  /**
   * HANDLE SUBSCRIBE
   * @param email
   */
  handleSubscribe: function (email) {
    const emailSuccess = this._checkEmail(email);
    if (emailSuccess) {
      this._showMessage({
        type: 'success',
        text: 'Success Email'
      });
      // AJAX SERVER
    } else {
      this._showMessage({
        type: 'error',
        text: 'Invalid Email'
      })
    }
  },
  /**
   * CHECK EMAIL
   * @param email
   * @returns {boolean}
   * @private
   */
  _checkEmail: function (email) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
  },
  /**
   * SHOW MESSAGE
   * @param message
   * @private
   */
  _showMessage: function (message) {
    this.setState({
      showMessage: true,
      message: message.text,
      typeMessage: message.type
    });
    setTimeout(()=> {
      this._hideMessage();
    }, 2000);
  },
  /**
   * HIDE MESSAGE
   * @private
   */
  _hideMessage: function () {
    this.setState({
      showMessage: false,
      message: ''
    })
  },
  /**
   * RENDER
   * @returns {XML}
   */
  render: function () {
    return (
      <div className="b-newsletter">
        <NewsletterEditor onSubscribe={this.handleSubscribe}/>
        {this.state.showMessage ? <NewsletterMessage message={this.state.message} type={this.state.typeMessage}/> : null}
      </div>
    );
  }
});

module.exports = NewsletterApp;