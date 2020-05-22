import React, { Fragment, useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route, useRouteMatch } from 'react-router-dom';
import { routePublic, routePrivate } from '@kenkoon/router';
import { DrawerNavbar } from '@kenkoon/components';
import axios from 'axios'
import { GET } from 'api-request-json'

export function RoutePublicAdminPage() {
  return (
    <Fragment>
      {routePublic.map((route, index) => (
        <Route key={index} exact={route.exact} path={route.path} component={route.component} />
      ))}
    </Fragment>
  )
}

export function RoutePrivateAdminPage() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <DrawerNavbar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      >
        {routePrivate.map((route, index) => (
          <Route key={index} exact={route.exact} path={route.path} component={route.component} />
        ))}
      </DrawerNavbar>
    </Fragment>
  )
}

function App() {
  const [
    auth,
    setAuth
  ] = useState(false);

  useEffect(() => {
    axios.get(`https://api-kenkoon.herokuapp.com/api/auth/dashboard`).then(data => {

      console.log(data);
      setAuth(true)
    }).catch((err) => {
      console.log(err);
      // setAuth(false)
      axios.get(`https://api-kenkoon.herokuapp.com/api/admin/user`).then(user => {
        console.log(user);
        user.data.result.map(uid => {
          console.log(uid._id);
          if (sessionStorage.getItem("login") === uid._id) {
            setAuth(true)
          } else {
            setAuth(false)
          }

        })
      })
    })
    // GET("https://api-kenkoon.herokuapp.com/api/auth/dashboard").then(data => {
    //   console.log(data);
    //   if (data.data !== undefined) {

    //     setAuth(true)
    //   } else {
    //     setAuth(false)
    //   }
    // })
  }, [])

  return (
    <Fragment>
      {auth !== true ? (
        <Fragment>
          <RoutePublicAdminPage />
        </Fragment>
      ) : (
          <Fragment>
            <RoutePrivateAdminPage />
          </Fragment>
        )}
    </Fragment>
  );
}

export default App;
