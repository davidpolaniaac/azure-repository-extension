import { ObservableValue } from 'azure-devops-ui/Core/Observable';
import { renderCell } from '../../../../components/Table/renderCell';
import { renderColumn } from '../../../../components/Table/renderColumn';

export const columns = [{
        id: 'reposiotry',
        name: 'Repository',
        width: new ObservableValue(-33),
        renderCell,
    },
    {
        id: 'defaultBranch',
        name: 'Default Branch',
        width: new ObservableValue(-33),
        renderCell: renderColumn,
    },
];