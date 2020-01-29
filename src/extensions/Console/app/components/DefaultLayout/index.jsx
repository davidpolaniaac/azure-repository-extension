import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Surface } from 'azure-devops-ui/Surface';
import withLoading from '../WithLoading';
import { ROUTE_NAMES, ROUTES } from '../../../constants/routes';
import Error404 from '../../screens/Errors/Error404';
import DefaultPage from '../DefaultPage';

class DefaultLayout extends React.Component {
  renderReposityRoutes = () => ROUTES[ROUTE_NAMES.CONSOLE].routes.map(this.renderRoute);

  renderRoute = route => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} {...route} title={route.title} />}
    />
  );

  render() {
    return (
      <>
        <Surface background={1}>
          <div className="container__wrap">
            <Switch>
              {this.renderReposityRoutes()}
              <Route path="/" render={() => <DefaultPage />} />
              <Route component={Error404} />
            </Switch>
          </div>
        </Surface>
    </>
    );
  }
}

export default withLoading(props => props.loader)(DefaultLayout);
