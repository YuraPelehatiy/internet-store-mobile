import i18n from 'ex-react-native-i18n';
import locales from '../i18n';

const loadI18n = async () => {
    await i18n.initAsync(locales);
};

export default loadI18n;