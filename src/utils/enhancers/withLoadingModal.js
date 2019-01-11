import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { LoaderModal } from '../../components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const withLoadingModal = (isVisible, loadingText) => BaseComponent => (
    props => (
        <SafeAreaView style={styles.container}>
            <BaseComponent {...props} />
            <LoaderModal
                isVisible={props[isVisible]}
                loadingText={loadingText}
            />
        </SafeAreaView>
    )
);

export default withLoadingModal;