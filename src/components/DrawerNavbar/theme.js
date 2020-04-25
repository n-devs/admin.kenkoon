import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: '#333',
                backgroundColor: '#000',

            },
            root: {
                width: '100%',
                display: 'flex',
                zIndex: '1100',
                boxSizing: 'border-box',
                flexShrink: 0,
                flexDirection: 'column',
            }
        },
        MuiTypography: {
            root: {
                margin: 0,
                fontSize: '13px',
            },
            body1: {
                fontFamily: '"CenturyGothicStd", "Century Gothic", sans-serif',
                // fontWeight: 400,
                // lineHeight: 1.5,
                letterSpacing: '0.00938em',
                color: '#b0b0b0',
                textTransform: 'uppercase',
                fontSize: '13px',
                letterSpacing: '.2em'

            }
        }
    }
})
