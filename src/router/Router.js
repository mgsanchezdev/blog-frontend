import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../views/Layout/Layout';
import Home from '../views/Home/Home';
import Error from '../views/Error/Error';
import Details from '../views/Details/Details';
import PostCreate from '../views/PostCreate/PostCreate';
import PostUpdate from '../views/PostUpdate/PostUpdate';

const router = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Details} />
            <Route exact path="/create" component={PostCreate} />
            <Route exact path="/update" component={PostUpdate} />
            <Route exact path="*" component={Error} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default router;
