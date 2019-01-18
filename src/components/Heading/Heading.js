import React from 'react';
import { Text } from 'react-native';
import s from './styles';

const Heading = ({ children }) => (
    <Text style={s.text}>{children}</Text>
);

export default Heading;