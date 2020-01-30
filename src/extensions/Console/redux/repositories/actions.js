import { completeTypes, createTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import repositoryServices from '../../services/repository';
import { REPOSITORIES } from './constants';

const completedTypes = completeTypes(['ADD_INFO', 'GET_INFO', 'DELETE_INFO', 'UPDATE_INFO'], ['SET_INFO']);

export const actions = createTypes(completedTypes, '@@REPOSITORIES');

export const actionCreators = {
    getRepositories: () => ({
        type: actions.GET_INFO,
        target: REPOSITORIES,
        service: repositoryServices.getRepositories,
        failureSelector: response => response.code,
        successSelector: response => response.values,
        injections: [
            withPostFailure((_, response) => {
                console.log('ERROR GET REPOSITORIES :', response);
            }),
        ],
    }),
};