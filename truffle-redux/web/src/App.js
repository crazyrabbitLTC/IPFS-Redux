import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import './App.css';
import { getLocale } from './locales';
import NoMatch from './components/NoMatch';
import Home from './containers/Home';
import Demo from './containers/Demo';
// import Counter from './components/About';

function App() {
  const locale = getLocale();

  return (
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      <Router basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
            <Route exact path="/demo" component={Demo} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;