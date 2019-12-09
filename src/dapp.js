import React from 'react';
import ReactDOM from 'react-dom';

import BadgeAdminUI from './components/badgeAdmin';
import BadgeViewAddress from './components/badgeViewAddress';
import BadgeViewToken from './components/badgeViewToken';

import './dapp.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <BadgeAdminUI />
      <BadgeViewAddress />
      <BadgeViewToken />
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
