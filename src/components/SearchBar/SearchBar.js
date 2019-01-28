import React from 'react';
import {} from 'react-native';
import { SearchBar } from 'react-native-elements';
import s from './styles';

const SearchField = ({
    placeholder,
    onChangeText,
    onEndEditing,
    ...props
}) => (
    <SearchBar
        containerStyle={s.container}
        inputStyle={s.input}
        inputContainerStyle={s.inputContainer}
        clearIcon={{ size: 20, color: '#eee' }}
        searchIcon={false}
        onChangeText={text => onChangeText(text)}
        onEndEditing={value => onEndEditing(value)}
        placeholder={placeholder}
        placeholderTextColor='#eee'
        {...props}
    />
);

export default SearchField;