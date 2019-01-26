import i18n from 'ex-react-native-i18n';
import en from './locales/en.json';
import uk from './locales/uk.json';

i18n.fallbacks = true;

i18n.defaultLocale = 'en';

i18n.locale = 'en';

i18n.translations = {
    en,
    uk,
};

export const setDefaultLocale = () => {
    i18n.defaultLocale = 'en';
};

export const setLocale = (locale) => {
    i18n.locale = locale;
};

export default i18n.translate.bind(i18n);