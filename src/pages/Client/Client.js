import React, { useState } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from 'src/components/RouteWithLayout'
import { makePrivateLayout } from 'src/layouts'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SettingsIcon from '@material-ui/icons/Settings'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import { logoutClient } from 'src/services/auth'

const DashboardView = () => <h1>Aqui vai o Cliente</h1>
const DashboardViewUsers = () => <h1>Aqui vai o Users</h1>

const pathBase = '/cliente'
const paths = {
  base: pathBase,
  dashboard: `${pathBase}/painel`,
  notfound: `${pathBase}/not-found`,
}

const pages = [
  {
    title: 'Painel',
    href: paths.dashboard,
    icon: <DashboardIcon />,
  },
  {
    title: 'Users',
    href: '/users',
    icon: <PeopleIcon />,
  },
  {
    title: 'Products',
    href: '/products',
    icon: <ShoppingBasketIcon />,
  },
  {
    title: 'Authentication',
    href: '/sign-in',
    icon: <LockOpenIcon />,
  },
  {
    title: 'Typography',
    href: '/typography',
    icon: <TextFieldsIcon />,
  },
  {
    title: 'Account',
    href: '/account',
    icon: <AccountBoxIcon />,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />,
  },
]

const Client = () => {
  const [logout, setLogout] = useState(false)

  const handleLogout = () => {
    logoutClient()
    setLogout(true)
  }

  const Layout = makePrivateLayout(pages, handleLogout)

  return (
    <Switch>
      {logout ? <Redirect to={paths.base} /> : null}
      <Redirect exact from={paths.base} to={paths.dashboard} />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path={paths.dashboard}
      />
      <RouteWithLayout
        component={DashboardViewUsers}
        exact
        layout={Layout}
        path="/cliente/users"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/products"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/typography"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/icons"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/account"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/settings"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/sign-up"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/sign-in"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path="/cliente/not-found"
      />
      <Redirect to="/cliente/not-found" />
    </Switch>
  )
}

export default Client
