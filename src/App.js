import React from 'react';

// Router
import { Route, Switch } from 'react-router';

//HOC
import Auxiliary from './HOC/Auxiliary';

// Components
import Layout from './HOC/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './Containers/CheckOut/CheckOut';
import Orders from './Containers/Orders/Orders';

const App = () => {
  return (
    <Auxiliary>
      <Layout>
        <Switch>
          <Route path="/checkout" component={CheckOut} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </Auxiliary>
  )
}

export default App;
