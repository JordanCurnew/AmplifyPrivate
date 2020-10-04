import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import TestPage from './views/TestPage';
import Checkout from './views/Checkout_user';
import CompanySignUp from './views/Company_SignUp';
import DisplayTest from './views/DisplayTest';
import CompanyDashboard from './views/CompanyDashboard';
import IndividualDashboard from './views/IndividualDashboard';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Individual-Sign-Up" component={Checkout} />
          <AppRoute exact path="/Company-Sign-Up" component={CompanySignUp} />
          <AppRoute exact path="/DisplayTest" component={DisplayTest} />
          <AppRoute exact path="/CompanyDashboard" component={CompanyDashboard} />
          <AppRoute exact path="/IndividualDashboard" component={IndividualDashboard} />
          
        </Switch>
      )} />
  );
}

export default App;