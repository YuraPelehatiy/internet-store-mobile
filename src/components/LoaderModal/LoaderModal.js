import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Modal from 'react-native-modal';
import s from './styles';

const LoaderModal = ({ isVisible, loadingText }) => (
    <SafeAreaView>
        <Modal isVisible={isVisible}>
            <View>
                <ActivityIndicator size={100} color='#ff8a00' />
            </View>
            <Text style={s.loaderText}>{loadingText}</Text>
        </Modal>
    </SafeAreaView>
);


export default LoaderModal;