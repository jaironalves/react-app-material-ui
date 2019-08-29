import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {},
}))

const Sale = props => {
  const { className } = props

  const classes = useStyles()

  const [values, setValues] = useState({
    clientLogin: '',
    saleAmount: '',
    clientPassword: '',
  })

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Card className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="Registro de nova venda" title="Venda" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Login cliente"
                margin="dense"
                name="clientLogin"
                onChange={handleChange}
                required
                value={values.clientLogin}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Valor"
                margin="dense"
                name="saleAmount"
                required
                onChange={handleChange}
                type="number"
                value={values.saleAmount}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Senha do cliente"
                margin="dense"
                name="clientPassword"
                onChange={handleChange}
                type="password"
                required
                value={values.clientPassword}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Registrar
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

Sale.propTypes = {
  className: PropTypes.string,
}

export default Sale
