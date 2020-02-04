import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Surface } from 'azure-devops-ui/Surface';
import { Header, TitleSize } from 'azure-devops-ui/Header';
import { Page } from 'azure-devops-ui/Page';
import { Card } from 'azure-devops-ui/Card';
import { Table, ColumnSorting, sortItems } from 'azure-devops-ui/Table';
import { ArrayItemProvider } from 'azure-devops-ui/Utilities/Provider';
import { Tab, TabBar, TabSize } from 'azure-devops-ui/Tabs';
import { FilterBar } from 'azure-devops-ui/FilterBar';
import { KeywordFilterBarItem } from 'azure-devops-ui/TextFilterBarItem';
import { Filter, FILTER_CHANGE_EVENT, FilterOperatorType } from 'azure-devops-ui/Utilities/Filter';
import { columns } from './constants';
import { actionCreators as repositoriesActions } from '../../../../../redux/repositories/actions';

class Repository extends React.Component {
  constructor(props) {
    super(props);

    this.filter = new Filter();
    this.filter.setFilterItemState('listMulti', {
      value: [],
      operator: FilterOperatorType.and,
    });
    this.filter.subscribe(() => {
      this.currentState.value = JSON.stringify(this.filter.getState(), null, 4);
    }, FILTER_CHANGE_EVENT);
  }


  componentWillMount() {
    const { getRepositories } = this.props;
    getRepositories();
  }

  getCommandBarItems() {
    return [
      {
        id: 'panel',
        text: 'Create',
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
        text: 'Security',
        important: false,
        onActivate: () => { },
        tooltipProps: {
          text: 'Open a simple message dialog',
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

          <FilterBar filter={this.filter}>
            <KeywordFilterBarItem filterItemKey="Placeholder" />
          </FilterBar>

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
