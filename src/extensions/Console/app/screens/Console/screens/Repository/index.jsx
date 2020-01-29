import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Repository extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, world Repository!</h1>
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
