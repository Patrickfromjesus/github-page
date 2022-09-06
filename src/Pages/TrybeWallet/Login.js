import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser, fetchApiCoin } from './redux/actions';
import './Login.css';

class LoginWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passwordValidation: false,
      emailValidation: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, type } }) {
    const MIN_LENGHT_PASSWORD = 5;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (type === 'email' && regex.test(value)) {
      return this.setState({ email: value, emailValidation: true });
    }
    if (type === 'email') {
      return (
        this.setState({ email: '', emailValidation: false }));
    }
    if (type === 'password' && value.length > MIN_LENGHT_PASSWORD) {
      this.setState({ passwordValidation: true });
    } else this.setState({ passwordValidation: false });
  }

  render() {
    const { handleClick, history } = this.props;
    const { email, emailValidation, passwordValidation } = this.state;
    const validation = !(emailValidation && passwordValidation);
    return (
      <div className="div-login">
        <form className="form-login">
          <h2>TrybeWallet</h2>
          <input
            onChange={ (e) => this.handleChange(e) }
            type="email"
            data-testid="email-input"
            placeholder="Email"
            className="login-form input-wallet"
          />
          <input
            onChange={ (e) => this.handleChange(e) }
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            className="login-form input-wallet"
          />
          <button
            type="button"
            onClick={ () => handleClick(email, history) }
            disabled={ validation }
            className="btn-login button-wallet"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (state, history) => {
    dispatch(getUser(state));
    dispatch(fetchApiCoin());
    history.push('/github-page/carteira');
  },
});

LoginWallet.propTypes = {
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(LoginWallet);
