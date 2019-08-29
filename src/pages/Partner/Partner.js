import React, { useState } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from 'src/components/RouteWithLayout'
import { makePrivateLayout } from 'src/layouts'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SettingsIcon from '@material-ui/icons/Settings'
import { logoutPartner } from 'src/services/auth'

import Sale from './Sale'

const pathBase = '/parceiro'
const paths = {
  base: pathBase,
  dashboard: `${pathBase}/painel`,
  sale: `${pathBase}/venda`,
  sales: `${pathBase}/vendas`,
  account: `${pathBase}/conta`,
  settings: `${pathBase}/configuracoes`,
  notfound: `${pathBase}/notfound`,
}

const pages = [
  {
    title: 'Painel',
    href: paths.dashboard,
    icon: <DashboardIcon />,
  },
  {
    title: 'Registro',
    href: paths.sale,
    icon: <ShoppingBasketIcon />,
  },
  {
    title: 'Vendas',
    href: paths.sales,
    icon: <ShoppingCartIcon />,
  },
  {
    title: 'Conta',
    href: paths.account,
    icon: <AccountBoxIcon />,
  },
  {
    title: 'Configurações',
    href: paths.settings,
    icon: <SettingsIcon />,
  },
]

const DashboardView = () => <div>Aqui vai o Parceiro</div>

const Partner = () => {
  const [logout, setLogout] = useState(false)

  const handleLogout = () => {
    logoutPartner()
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
        component={Sale}
        exact
        layout={Layout}
        path={paths.sale}
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path={paths.sales}
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
        path={paths.notfound}
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path={paths.notfound}
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={Layout}
        path={paths.notfound}
      />
      <Redirect to={paths.notfound} />
    </Switch>
  )
}

export default Partner
