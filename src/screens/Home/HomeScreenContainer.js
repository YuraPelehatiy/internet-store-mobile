import { hoistStatics, compose } from 'recompose';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreenComponent';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    language: state.app.language,
});

export default hoistStatics(
    compose(
        connect(mapStateToProps),
        withLanguageOnChange('language', 'main.home.header'),
    ),
)(HomeScreen);