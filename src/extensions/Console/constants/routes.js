import { t } from 'i18next';
import Repository from '../app/screens/Console/screens/Repository';

export const ROUTE_NAMES = {
  CONSOLE: 'console',
  REPOSITORY: 'repository',
  ADD: 'add',
  EDIT: 'edit',
  DETAIL: 'detail',
};

export const PUBLIC_ROUTES = [
  { path: '/', component: Repository },
];

export const CONSOLE_ROUTES = {
  REPOSITORY: {
    LIST: `/${ROUTE_NAMES.CONSOLE}/${ROUTE_NAMES.REPOSITORY}`,
    CREATE: `/${ROUTE_NAMES.CONSOLE}/${ROUTE_NAMES.REPOSITORY}/${ROUTE_NAMES.ADD}`,
    EDIT: `/${ROUTE_NAMES.CONSOLE}/${ROUTE_NAMES.REPOSITORY}/${ROUTE_NAMES.EDIT}/:id`,
    DETAIL: `/${ROUTE_NAMES.CONSOLE}/${ROUTE_NAMES.REPOSITORY}/${ROUTE_NAMES.DETAIL}/:id`,
  },
};

export const ROUTES = {
  [ROUTE_NAMES.CONSOLE]: {
    path: `/${ROUTE_NAMES.CONSOLE}`,
    title: t('console:console'),
    icon: 'diamond',
    routes: [
      {
        path: CONSOLE_ROUTES.REPOSITORY.LIST,
        component: Repository,
        title: t('repositories:repositories'),
      },
    ],
  },
};
