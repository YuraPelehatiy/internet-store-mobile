import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import { SearchBar } from '../../components';
import SearchListContainer from './SearchList/SearchListContainer';
// import screens from '../../navigation/screens';
import s from './styles';

const SearchScreen = () => (
    <SafeAreaView style={s.container}>
        <View style={s.list}>
            <SearchListContainer />
        </View>
    </SafeAreaView>
);

SearchScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: (
        <SearchBar
            onChangeText={navigation.getParam('onChangeTextSearch')}
            onEndEditing={navigation.getParam('onEndEditingSearch')}
            placeholder={i18n.t('main.search.header.placeholder')}
        />
    ),
});

export default SearchScreen;