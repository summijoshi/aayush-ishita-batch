import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Login from './components/Login';
import Notfound from './components/Notfound';
import Dashboard from './components/Dashboard';
import ChangePass from './components/ChangePass';
import Category from './components/Category';
import Addcat from './components/Addcat';
import Editcat from './components/Editcat';
import Product from './components/Product';
import Addpro from './components/Addpro';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/dashboard/changepassword" exact component={ChangePass}/>
          <Route path="/dashboard/category" exact component={Category}/>
          <Route path="/dashboard/addcat" exact component={Addcat}/>
          <Route path="/dashboard/addpro" exact component={Addpro}/>
          <Route path="/dashboard/product" exact component={Product}/>
          <Route path="/dashboard/editcat/:cid" exact component={Editcat}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
