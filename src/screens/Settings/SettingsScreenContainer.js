import {
    compose,
    withStateHandlers,
    hoistStatics,
    withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import SettingsScreenComponent from './SettingsScreenComponent';
import * as appActions from '../../modules/app/appActions';
import { setLocale } from '../../utils';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    language: state.app.language,
});

const mapDispatchToProps = {
    toggleLanguage: appActions.toggleLanguage,
};

export default hoistStatics(
    compose(
        connect(
            mapStateToProps,
            mapDispatchToProps,
        ),
        withStateHandlers({
            language_: 'en',
        }, {
            onChangeSetting: () => (setting, value) => ({
                [setting]: value,
            }),
        }),
        withHandlers({
            changeLanguage: props => (language) => {
                props.toggleLanguage({ language });
                setLocale(language);
            },
        }),
        withLanguageOnChange('language', 'main.settings.header'),
    ),
)(SettingsScreenComponent);