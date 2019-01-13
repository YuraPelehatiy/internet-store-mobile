import React from 'react';
import { SafeAreaView } from 'react-navigation';
import s from './styles';
import { Loader } from '../../components';

const LoadingScreen = () => (
    <SafeAreaView style={s.container}>
        <Loader />
    </SafeAreaView>
);


export default LoadingScreen;