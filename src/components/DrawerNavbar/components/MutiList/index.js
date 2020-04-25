import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';


export default function MutiList(props) {
  const history = useHistory();
  const { title, path, icon, submenu, classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = (url) => {
    if (submenu !== null) {
      setOpen(!open);
    } else {
      // history.push(url)
      setOpen(open);
    }

  };

  function toPath(to) {
    history.push(to);
  }

  return (
    <Fragment>
      {submenu !== null ? (
        <Fragment>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
            <Fragment>
              {open ? <ExpandLess /> : <ExpandMore />}
            </Fragment>

          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit style={{
            minHeight: 'auto'
          }}>
            {submenu.map((data, index) => (
              <List component="div" disablePadding key={index}>

                <MuiThemeProvider theme={theme}>
                  <Link to={data.path} style={{
                    textDecoration: 'none',
                    textOverflow: 'ellipsis',
                    width: '-webkit-fill-available',
                    whiteSpace: 'normal',
                  }}>
                    <ListItem button className={classes.nested} >
                      <ListItemIcon>
                        <data.icon />
                      </ListItemIcon>
                      <ListItemText primary={data.title} />
                    </ListItem>
                  </Link>
                </MuiThemeProvider>
              </List>
            ))}

          </Collapse>
        </Fragment>
      ) : (
          <MuiThemeProvider theme={theme}>
            <Link to={path} style={{
              textDecoration: 'none',
              textOverflow: 'ellipsis',
              width: '-webkit-fill-available',
              whiteSpace: 'normal',
            }}>
              <ListItem button >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          </MuiThemeProvider>
        )}

      <Divider />
    </Fragment>
  )
}

MutiList.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.node,
  submenu: PropTypes.array,
  classes: PropTypes.object
}