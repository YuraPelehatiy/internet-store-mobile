import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';
// import s from './styles';

const Loader = () => (
    <ActivityIndicator size={100} color={colors.activityIndicator.color} />
);


export default Loader;