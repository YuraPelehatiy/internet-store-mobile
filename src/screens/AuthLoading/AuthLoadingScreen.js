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
                await this.props.init();
                this.props.navigation.navigate(screens.AuthorizedApp);
            } catch (error) {
                this.props.navigation.navigate(screens.UnauthorizedApp);
            }
        },
    }),
)(AuthLoadignScreen);