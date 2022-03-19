import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  NavigatePath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{
            pathname: `${NavigatePath}`,
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default PrivateRoute
