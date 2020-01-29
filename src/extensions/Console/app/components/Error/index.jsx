import React from 'react';
import PropTypes from 'prop-types';
import { MessageCard, MessageCardSeverity } from 'azure-devops-ui/MessageCard';

function ErrorMessage({ error }) {
  return (
    <MessageCard
      className="flex-self-stretch"
      severity={MessageCardSeverity.Error}
    >
      {error}
    </MessageCard>

  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
