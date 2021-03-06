import React, { useEffect } from 'react';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/cjs/NotificationPortal';
import { Main } from '@redhat-cloud-services/frontend-components/components/cjs/Main';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import './App.scss';

import ErrorBoundary from './components/ErrorBoundary';
import PermissionsChecker from './components/PermissionsChecker';
import { getBaseName } from './frontend-components-copies/getBaseName';

const App = () => {
  useEffect(() => {
    insights.chrome.init();
    try {
      insights.chrome.identifyApp('sources');
    } catch (_exception) {
      // eslint-disable-next-line no-console
      console.warn('Failed to initialize chrome navigation.');
    }
  }, []);

  return (
    <Router basename={getBaseName(location.pathname, 1)}>
      <IntlProvider locale="en">
        <React.Fragment>
          <NotificationsPortal />
          <ErrorBoundary>
            <PermissionsChecker>
              <Main style={{ padding: 0 }}>
                <Routes />
              </Main>
            </PermissionsChecker>
          </ErrorBoundary>
        </React.Fragment>
      </IntlProvider>
    </Router>
  );
};

export default App;
