import React from 'react';
import { TextInput } from 'react-native';
import s from './style';

const Input = props => (
    <TextInput style={s.input} {...props} />
);

export default Input;