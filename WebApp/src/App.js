import './scss/site.scss';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './router';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                <Header></Header>
                {
                    routes.map((route, i) => (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={props => (
                                <route.component {...props} routes={route.routes} />
                            )} />
                    ))
                }
                <Footer/>

            </Fragment>
        </Router>
    );
  }
}

export default App;
