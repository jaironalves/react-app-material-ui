import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Company from './pages/Company'
import ClientLogin from './pages/Client/Login'
import Client from './pages/Client/Client'
import PartnerLogin from './pages/Partner/Login'
import Partner from './pages/Partner'
import Representative from './pages/Representative'
import RepresentativeLogin from './pages/Representative/Login'
import NotFound from './pages/NotFound'

import { MenuPaths } from './Menu'

import {
  isAuthenticatedClient,
  isAuthenticatedPartner,
  isAuthenticatedRepresentative,
} from './services/auth'

import PrivateRoute from './components/PrivateRoute'

const Routes = () => (
  <Switch>
    <Route exact path={MenuPaths.Home} component={Home} />
    <Route path={MenuPaths.Company} component={Company} />
    <Route exact path={MenuPaths.ClientLogin} component={ClientLogin} />
    <PrivateRoute
      path={MenuPaths.Client}
      redirectPath={MenuPaths.ClientLogin}
      component={Client}
      isAuthenticated={isAuthenticatedClient}
    />
    <Route exact path={MenuPaths.PartnerLogin} component={PartnerLogin} />
    <PrivateRoute
      path={MenuPaths.Partner}
      redirectPath={MenuPaths.PartnerLogin}
      component={Partner}
      isAuthenticated={isAuthenticatedPartner}
    />
    <Route
      exact
      path={MenuPaths.RepresentativeLogin}
      component={RepresentativeLogin}
    />
    <PrivateRoute
      path={MenuPaths.Representative}
      redirectPath={MenuPaths.RepresentativeLogin}
      component={Representative}
      isAuthenticated={isAuthenticatedRepresentative}
    />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
