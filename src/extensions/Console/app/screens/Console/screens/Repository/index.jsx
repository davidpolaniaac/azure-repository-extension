import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Surface } from 'azure-devops-ui/Surface';
import { Header, TitleSize } from 'azure-devops-ui/Header';
import { Page } from 'azure-devops-ui/Page';
import { Card } from 'azure-devops-ui/Card';
import { Table } from 'azure-devops-ui/Table';
import { ArrayItemProvider } from 'azure-devops-ui/Utilities/Provider';
import { Tab, TabBar, TabSize } from 'azure-devops-ui/Tabs';
import { columns } from './constants';
import { actionCreators as repositoriesActions } from '../../../../../redux/repositories/actions';


class Repository extends React.Component {
  componentWillMount() {
    const { getRepositories } = this.props;
    getRepositories();
  }

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
    const { repositories } = this.props;
    return (
      <Page className="flex-grow">
        <Header
          title="Console"
          titleSize={TitleSize.Large}
          commandBarItems={this.getCommandBarItems()}
          description="description"
        />

        <div className="page-content page-content-top">
          <Card
            className="bolt-card-no-vertical-padding"
            contentProps={{ contentPadding: false }}
          >
            <Table
              columns={columns}
              itemProvider={new ArrayItemProvider(repositories)}
              showLines
              singleClickActivation
              onActivate={() => console.log('gola')}
            />
          </Card>
        </div>

      </Page>
    );
  }
}

Repository.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape()),
  getRepositories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  repositoriesLoading: state.repositories.repositoriesLoading,
  repositories: state.repositories.repositories,
});

const mapDispatchToProps = dispatch => ({
  getRepositories: () => dispatch(repositoriesActions.getRepositories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Repository);
