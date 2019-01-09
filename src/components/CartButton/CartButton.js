import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
// import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import * as cartSelectors from '../../modules/cart/cartSelectors';

const CartButton = ({
    countItems,
    ...props
}) => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <Text>
            Cart
        </Text>
        <Text>
            {countItems}
        </Text>
    </TouchableOpacity>
);

const mapStateToProps = state => ({
    countItems: cartSelectors.getCountItems(state),
});

export default connect(mapStateToProps)(CartButton);