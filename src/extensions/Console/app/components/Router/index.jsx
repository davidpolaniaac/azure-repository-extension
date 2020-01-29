import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../../constants/routes';
import withLoading from '../WithLoading';
import CheckRoute from './components/CheckRoute';


class Router extends Component {
  renderRoutes = route => <CheckRoute key={route.path} {...route} {...this.props} />
  render() {
    return <Switch>{PUBLIC_ROUTES.map(this.renderRoutes)}</Switch>;
  }
}

export default withLoading(props => props.loader, false)(Router);
