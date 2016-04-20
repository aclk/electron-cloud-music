import React, { Component } from 'react';
import { search } from '../server';
import Spinner from './Spinner.jsx';

export default class UserState extends Component {
  constructor(props: any) {
    super(props);
  }

  _login(e) {
    this.props.loginform(true);
  }

  render() {
    if (this.props.user.loginState == 'logged_in') {
      return this.renderUser();
    } else if (this.props.user.loginState == 'logging_in') {
      return this.renderLogging();
    } else {
      return this.renderGuest();
    }
  }

  renderGuest() {
    return (
      <div className="header__user">
        <div className="header__user__avatar">
        </div>
        <div className="header__user__login" onClick={e => this._login(e) }>
          登录
        </div>
      </div>
    );
  }

  renderLogging() {
    return (
      <div className="header__user">
        <div className="header__user__avatar">
          <Spinner />
        </div>
        <div className="header__user__login" onClick={e => this._login(e) }>
          登录中..
        </div>
      </div>
    );
  }

  renderUser() {
    return (
      <div className="header__user">
        <div className="header__user__avatar">
          <img src={this.props.user.profile.avatarUrl} />
        </div>
        <div className="header__user__name">
          {this.props.user.profile.nickname}
        </div>
      </div>
    );
  }
}
