import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { BrowserRouter as Router, Route, Switch } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import { IntlProvider } from 'react-intl';

import './App.css';
import { getLocale } from './locales';
import NoMatch from './components/NoMatch';
import Home from './containers/Home';
import IPFS_status from './containers/IPFS_status';
// import Counter from './components/About';

function App() {
  const locale = getLocale();

  return (
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      <Router basename="/">
        <div className="App">
          <Switch>
            <Route  path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}

            <Route exact path="/demo" component={IPFS_status} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
