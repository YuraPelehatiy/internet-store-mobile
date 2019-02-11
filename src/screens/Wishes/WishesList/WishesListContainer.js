import React from 'react';
import {
    compose,
    withHandlers,
    mapProps,
    // lifecycle,
    branch,
    renderComponent,
} from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import i18n from 'ex-react-native-i18n';
import WishesListComponent from './WishesListComponent';
import * as wishesSelectors from '../../../modules/wishes/wishesSelectors';
import * as wishesOperations from '../../../modules/wishes/wishesOperations';
import screens from '../../../navigation/screens';
import { ProductButton, Loader } from '../../../components';

const mapStateToProps = state => ({
    wishesItems: state.wishes.items,
    products: wishesSelectors.getProducts(state),
    isLoading: state.wishes.isLoading,
});

const mapDispatchToProps = {
    removeItemFromWishes: wishesOperations.removeWish,
};

export default compose(
    withNavigation,
    connect(mapStateToProps, mapDispatchToProps),
    branch(
        props => props.isLoading,
        renderComponent(Loader),
    ),
    withHandlers({
        navigateToProductScreen: props => item => props.navigation.navigate(screens.Product, {
            id: item.id,
            title: item.title,
        }),
        navigateToHomeScreen: props => () => props.navigation.navigate(screens.Home),
    }),
    mapProps(props => ({
        ...props,
        renderProductButton: (item, wishesItems) => (
            <ProductButton
                {...item}
                fullWidth
                samllImage
                key={item.id}
                onPress={() => props.navigateToProductScreen(item)}
                count={wishesItems[item.id].count}
                titleActionButton={i18n.t('main.wishes.buttons.removeFromWishes')}
                onPressActionButton={() => props.removeItemFromWishes({ id: item.id })}
            />
        ),
    })),
)(WishesListComponent);