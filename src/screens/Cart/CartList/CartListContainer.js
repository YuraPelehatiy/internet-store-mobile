import React from 'react';
import { compose, withHandlers, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import CartListComponent from './CartListComponent';
import * as cartSelectors from '../../../modules/cart/cartSelectors';
import * as cartActions from '../../../modules/cart/cartActions';
import screens from '../../../navigation/screens';
import { ProductButton } from '../../../components';

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    products: cartSelectors.getProducts(state),
});

const mapStateToDispatch = {
    removeItemFromCart: cartActions.remove,
    increase: cartActions.increase,
    decrease: cartActions.decrease,
    onEnterValue: cartActions.enterValue,
};

export default compose(
    withNavigation,
    connect(mapStateToProps, mapStateToDispatch),
    withHandlers({
        navigateToProductScreen: props => item => props.navigation.push(screens.Product, {
            id: item.id,
            title: item.title,
        }),
    }),
    mapProps(props => ({
        ...props,
        renderProductButton: (item, cartItem) => (
            <ProductButton
                {...item}
                key={item.id}
                onPress={() => props.navigateToProductScreen(item)}
                increase={props.increase}
                decrease={props.decrease}
                onEnterValue={props.onEnterValue}
                isCounter={true}
                count={cartItem[item.id].count}
                fullWidth
                titleActionButton='Remove from cart'
                onPressActionButton={() => props.removeItemFromCart({ id: item.id })}
             />
        ),
    }))
)(CartListComponent);