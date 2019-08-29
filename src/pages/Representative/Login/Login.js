import React from 'react'
import { Redirect } from 'react-router-dom'
import Login from 'src/components/Login'
import { PublicMain, PublicMenuValues } from 'src/layouts'
import { setTokenRepresentative } from 'src/services/auth'

const handleLogin = user => {
  const { login, password } = user

  if (!login || !password) {
    throw new Error('Preencha login e senha para continuar.')
  }

  //const response = await api.post('/sessions', { login, password })
  setTokenRepresentative('asdasda adasd asd as da')
}

const RepresentativeLogin = () => (
  <PublicMain menuValue={PublicMenuValues.Representative}>
    <Login
      handleLogin={handleLogin}
      redirectTo={<Redirect to="/representante" />}
    />
  </PublicMain>
)

export default RepresentativeLogin
