import { createTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

/*
    Para maiores informações consulte
    https://material-ui.com/customization/themes/
*/

const theme = createTheme({
  palette: {
    primary: green,
    secondary: pink,
    error: red,
  },
  typography: {
    useNextVariants: true,
  },
})

export default theme
