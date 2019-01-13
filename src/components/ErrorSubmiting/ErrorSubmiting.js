import React from 'react';
import { Text } from 'react-native';
import s from './styles';

const ErrorSubmiting = ({ children }) => (
    <Text style={s.errorText}>{children}</Text>
);


export default ErrorSubmiting;