import React from 'react';
import { Alert } from 'react-bootstrap';

export default function AlertPOP(prop) {
  const { alert } = prop;
  return (
    <Alert variant="info">
      {alert}
    </Alert>
  );
}
