import React from 'react'
import { Redirect } from 'react-router-dom'
import Login from 'src/components/Login'
import { PublicMain, PublicMenuValues } from 'src/layouts'
import { setTokenPartner } from 'src/services/auth'

const handleLogin = user => {
  const { login, password } = user

  if (!login || !password) {
    throw new Error('Preencha login e senha para continuar.')
  }

  //const response = await api.post('/sessions', { login, password })
  setTokenPartner('asdasda adasd asd as da')
}

const PartnerLogin = () => (
  <PublicMain menuValue={PublicMenuValues.Partner}>
    <Login handleLogin={handleLogin} redirectTo={<Redirect to="/parceiro" />} />
  </PublicMain>
)

export default PartnerLogin
