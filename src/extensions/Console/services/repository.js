import * as SDK from 'azure-devops-extension-sdk';
import { CommonServiceIds, getClient } from 'azure-devops-extension-api';
import { GitRestClient } from 'azure-devops-extension-api/Git/GitClient';

const services = {
    getRepositories: async() => {
        try {
            const projectService = await SDK.getService(CommonServiceIds.ProjectPageService);
            const project = await projectService.getProject();
            const gitClient = getClient(GitRestClient);
            const repository = await gitClient.getRepositories(project.name, true);
            return { ok: true, values: repository };
        } catch (error) {
            return { ok: false, ...error };
        }
    },
};

export default services;