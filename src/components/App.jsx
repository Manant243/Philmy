import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles.js';
import { Actors, MovieInformation, Movies, Navbar, Profile } from './';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route to exact path='/movie/:id'>
            <MovieInformation />
          </Route>
          <Route to exact path='/actors/:id'>
            <Actors />
          </Route>
          <Route to exact path='/'>
            <Movies />
          </Route>
          <Route to exact path='/profile/:id'>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;