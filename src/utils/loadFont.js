import { Font } from 'expo';

const loadFonts = async () => {
    await Promise.all([
        Font.loadAsync({
            'material': require('@expo/vector-icons/fonts/MaterialIcons.ttf'), // eslint-disable-line
            'material-community': require('@expo/vector-icons/fonts/MaterialCommunityIcons.ttf'), // eslint-disable-line
        }),
    ]);
};

export default loadFonts;