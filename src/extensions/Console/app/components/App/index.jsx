import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../../redux/store';
import Router from '../Router';
import ScrollToTop from './ScrollToTop';


class App extends React.Component {
  render() {
    const { pathname } = this.props;
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="flex-grow">
            <ConnectedRouter history={history}>
              <Router pathname={pathname} />
            </ConnectedRouter>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
