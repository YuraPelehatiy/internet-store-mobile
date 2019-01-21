import React from 'react';
import { FlatList } from 'react-native';
import { pure } from 'recompose';

const CartList = props => (
    <FlatList
        {...props}
    />
);

export default pure(CartList);