import React from 'react';
import { View } from 'react-native';
import s from './styles';

const SeveralHeaderButtonsWrapper = ({ children }) => (
    <View style={s.wrapper}>
        {children}
    </View>
);

export default SeveralHeaderButtonsWrapper;