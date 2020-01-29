import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class DefaultPage extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, world DefaultPage!</h1>

        <NavLink to="/console/repository" activeClassName="selected">
          Repository
        </NavLink>

      </>
    );
  }
}
DefaultPage.propTypes = {
};
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
