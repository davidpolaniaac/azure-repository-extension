import React from 'react';
import { t } from 'i18next';
import ErrorMessage from '../../../components/Error';

function Error404() {
  return <ErrorMessage error={`404 - ${t('app:notFound')}`} />;
}

export default Error404;
