import {createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h5: {
                // fontSize: '13px',
                fontFamily: '"CenturyGothicStd", "Century Gothic", sans-serif',
                letterSpacing: '0.00938em',
                color: '#fff',
                fontWeight: 'bolder',
                letterSpacing: '.2em'
            }
        }
    }
});