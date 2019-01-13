import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation'; // eslint-disable-line
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
const AuthLoadignScreen = () => (
    <SafeAreaView style={s.container}>
        <Loader />
    </SafeAreaView>
);

const mapStateToDispatch = {
    init: appOperations.init,
};

export default compose(
    connect(
        undefined,
        mapStateToDispatch,
    ),
    lifecycle({
        async componentDidMount() {
            try {
                console.log('Init...');
                await this.props.init();
                console.log('Inited!');
                this.props.navigation.navigate(screens.AuthorizedApp);
            } catch (error) {
                console.log('Error');
                this.props.navigation.navigate(screens.UnauthorizedApp);
            }
        },
    }),
)(AuthLoadignScreen);