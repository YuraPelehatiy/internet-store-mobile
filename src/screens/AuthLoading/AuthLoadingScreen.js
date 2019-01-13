import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Loader } from '../../components';
import screens from '../../navigation/screens';

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AuthLoadignScreen = () => (
    <SafeAreaView style={s.container}>
        <Loader />
    </SafeAreaView>
);

const mapStateToProps = () => ({});
const mapStateToDispatch = {};


export default compose(
    connect(mapStateToProps, mapStateToDispatch),
    lifecycle({
        async componentDidMount() {
            try {
                await this.props.init();
                this.props.navigation.navigate(screens.AuthorizedApp);
            } catch (err) {
                this.props.navigation.navigate(screens.UnauthorizedApp);
            }
        },
    }),
)(AuthLoadignScreen);