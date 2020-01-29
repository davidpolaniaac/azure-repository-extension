import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Repository extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, world Repository!</h1>
        <NavLink to="/" activeClassName="selected">
          home
        </NavLink>
      </>
    );
  }
}
Repository.propTypes = {
};
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Repository);
