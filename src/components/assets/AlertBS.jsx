import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { setAlert } from '../../redux/actions';

export default function AlertBS() {
  const dispatch = useDispatch();
  return (
    <Alert variant="danger" onClose={ () => dispatch(setAlert(false)) } dismissible>
      <Alert.Heading>Your search must have only 1 (one) character</Alert.Heading>
    </Alert>
  );
}
