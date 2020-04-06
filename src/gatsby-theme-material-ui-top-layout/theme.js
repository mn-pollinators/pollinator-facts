import { createMuiTheme } from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  //   palette: {
  //     type: 'dark',
  //   },
  palette: {
    primary: green,
    secondary: amber,
  },
});

export default theme;