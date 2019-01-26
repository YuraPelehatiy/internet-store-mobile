import { withPropsOnChange } from 'recompose';
import i18n from 'ex-react-native-i18n';

const withLanguageOnChange = (languageProps, i18nValue) => withPropsOnChange(
    [languageProps],
    (props) => {
        props.navigation.setParams({ title: i18n.t(i18nValue) });
    },
);

export default withLanguageOnChange;