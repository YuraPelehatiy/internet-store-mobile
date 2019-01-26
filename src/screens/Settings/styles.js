import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    body: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'stretch',
    },
    picker: {
        width: 140,
        height: 50,
    },
    setting: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    settingTitle: {
        fontSize: 17,
        height: 50,
        padding: 10,
        marginLeft: 10,
    },
});