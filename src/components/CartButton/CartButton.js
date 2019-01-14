import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import s from './styles';
import * as cartSelectors from '../../modules/cart/cartSelectors';
import { colors } from '../../styles';

const CartButton = ({
    countItems,
    ...props
}) => (
    <TouchableOpacity
        {...props}
        style={s.button}
    >
        <View style={s.cartButton}>
            <MaterialCommunityIcons
                size={25}
                color={colors.cartButton.color}
                name='cart'
            />
            <Text style={s.count}>
                {countItems}
            </Text>
        </View>
    </TouchableOpacity>
);

const mapStateToProps = state => ({
    countItems: cartSelectors.getCountItems(state),
});

export default connect(mapStateToProps)(CartButton);