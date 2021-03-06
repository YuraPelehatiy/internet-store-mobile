import { connect } from 'react-redux';
import { hoistStatics, compose } from 'recompose';
import ProfileScreenComponent from './ProfileScreenComponent';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    user: state.app.user,
    language: state.app.language,
});

export default hoistStatics(
    compose(
        connect(mapStateToProps),
        withLanguageOnChange('language', 'main.profile.header'),
    ),
)(ProfileScreenComponent);