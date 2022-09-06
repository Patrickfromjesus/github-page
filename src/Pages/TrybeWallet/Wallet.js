import React from 'react';
import Header from './componentsTrybeWallet/Header';
import WalletForm from './componentsTrybeWallet/WalletForm';
import Table from './componentsTrybeWallet/Table';
import { Link } from 'react-router-dom';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-page">
        <div>
          <Header />
          <WalletForm />
          <Table />
        </div>
        <div className="footer-and-hr-wallet">
          <hr />
          <footer className="footer-wallet">
            <p><em>Projeto desenvolvido por Patrick Gomes</em></p>
            <Link className="link" to="/github-page">Home</Link>
          </footer>
        </div>
      </div>
    );
  }
}

export default Wallet;
