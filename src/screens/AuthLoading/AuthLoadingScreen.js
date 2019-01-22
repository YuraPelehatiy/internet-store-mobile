import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, } from 'react-navigation'; // eslint-disable-line
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Loader } from '../../components';
import screens from '../../navigation/screens';
import * as appOperations from '../../modules/app/appOperations';

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// Screen-helper
// TODO: Change AuthLoadingScreen;
const AuthLoadignScreen = () => (
    <SafeAreaView style={s.container}>
        <Loader />
    </SafeAreaView>
);


const mapDispatchToProps = {
    init: appOperations.init,
};

export default compose(
    connect(
        undefined,
        mapDispatchToProps,
    ),
    lifecycle({
        async componentDidMount() {
            try {
                console.log('Init...');
                await this.props.init();
                console.log('Inited!');
                this.props.navigation.navigate(screens.AuthorizedApp);
            } catch (error) {
                console.log('Error token not found');
                this.props.navigation.navigate(screens.UnauthorizedApp);
            }
        },
    }),
)(AuthLoadignScreen);