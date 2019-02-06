import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import screens from '../../navigation/screens';
import * as appOperations from '../../modules/app/appOperations';
import LoadingScreen from '../Loading/LoadingScreen';

// Screen-helper
const AuthLoadignScreen = () => (
    <LoadingScreen />
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