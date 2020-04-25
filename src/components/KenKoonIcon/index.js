import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { styles } from './styles';
import { theme } from './theme';

function KenKoonIcon(props) {
    return (
        <MuiThemeProvider theme={theme}>
            <Typography variant="h5" component="h5"  {...props}>kenkoon</Typography>
        </MuiThemeProvider>
    )
}

export default withStyles(styles, { name: 'KKIcon' })(KenKoonIcon)