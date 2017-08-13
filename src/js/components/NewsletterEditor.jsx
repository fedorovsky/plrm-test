import React from 'react';
import './NewsletterEditor.scss';

const NewsletterEditor = React.createClass({
  getInitialState: function () {
    return {
      email: ''
    };
  },
  /**
   * INPUT EMAIL
   * @param event
   */
  inputEmail: function (event) {
    let email = event.target.value;
    this.setState({
      email: email
    })
  },
  /**
   * SUBSCRIBE
   * @param event
   */
  subscribe: function (event) {
    this.props.onSubscribe(this.state.email);
  },
  /**
   * RENDER
   * @returns {XML}
   */
  render: function () {
    return (
      <form className="b-newsletter__form" action="#">
        <input type="email"
               name="email"
               className="b-newsletter__input"
               placeholder="email"
               value={this.state.email}
               onChange={this.inputEmail}
        />
        <input type="button" className="b-newsletter__submit" value="Subscribes" onClick={this.subscribe}/>
      </form>
    );
  }
});

module.exports = NewsletterEditor;