import { hoistStatics, compose } from 'recompose';
import { connect } from 'react-redux';
import TermsAndConditionsComponent from './TermsAndConditionsComponent';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    language: state.app.language,
});

export default hoistStatics(
    compose(
        connect(mapStateToProps),
        withLanguageOnChange('language', 'main.t&c.header'),
    ),
)(TermsAndConditionsComponent);