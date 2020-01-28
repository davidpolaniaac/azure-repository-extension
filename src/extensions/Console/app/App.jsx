import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, worlddd!</h1>
      </>
    );
  }
}

App.propTypes = {
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
