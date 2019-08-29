import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { RouterLink } from 'src/components'

const useStyles = makeStyles(theme => ({
  heroContent: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const HomeContent = () => {
  const classes = useStyles()
  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            JS - React Material-UI
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            A Starter Kit.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/cliente"
                >
                  {"Let's Start"}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  )
}

export default HomeContent
