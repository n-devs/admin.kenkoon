import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            body2: {
                fontFamily: '"CenturyGothicStd", "Century Gothic", sans-serif',
                // fontWeight: 400,
                // lineHeight: 1.5,
                letterSpacing: '0.00938em',
                color: '#b0b0b0',
                textTransform: 'uppercase',
                fontSize: '0.85em',
                letterSpacing: '.2em'
            },
            colorPrimary: {
                color: '#b0b0b0'
            },


        },
        MuiLink: {
            root: {
                color: '#b0b0b0',
                '&:hover': {
                    color: '#c7893c',
                    fontWeight: 'bold'
                }
            },
            underlineNone: {
                textDecoration: 'none',

            },
            button: {
                padding: '16px 0px'
            }
        }
    }
});