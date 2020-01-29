import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Surface } from 'azure-devops-ui/Surface';
import { Header, TitleSize } from 'azure-devops-ui/Header';
import { Page } from 'azure-devops-ui/Page';
import { Tab, TabBar, TabSize } from 'azure-devops-ui/Tabs';

class Repository extends React.Component {
  getCommandBarItems() {
    return [
      {
        id: 'panel',
        text: 'Panel',
        onActivate: () => { },
        iconProps: {
          iconName: 'Add',
        },
        isPrimary: true,
        tooltipProps: {
          text: 'Open a panel with custom extension content',
        },
      },
      {
        id: 'messageDialog',
        text: 'Message',
        onActivate: () => { },
        tooltipProps: {
          text: 'Open a simple message dialog',
        },
      },
      {
        id: 'customDialog',
        text: 'Custom Dialog',
        onActivate: () => { },
        tooltipProps: {
          text: 'Open a dialog with custom extension content',
        },
      },
    ];
  }

  render() {
    return (
      <Page className="flex-grow">
        <Header
          title="Console"
          titleSize={TitleSize.Large}
          commandBarItems={this.getCommandBarItems()}
          description="description"
        />
      </Page>
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
