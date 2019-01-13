import React from 'react';
import {
    compose,
    lifecycle,
    withHandlers,
    branch,
    renderComponent,
    mapProps,
} from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import ProductListComponent from './ProductListComponent';
import * as productsOperations from '../../../modules/products/productsOperations';
import * as productsSelectors from '../../../modules/products/productsSelectors';
import * as productsActions from '../../../modules/products/productsActions';
import screens from '../../../navigation/screens';
import { Loader, ProductButton } from '../../../components';

const mapStateToProps = state => ({
    products: productsSelectors.getProducts(state),
    isLoading: state.products.isLoading,
    isError: state.products.isError,
    part: state.products.part,
    limit: state.products.limit,
});

const mapStateToDispatch = {
    fetchProducts: productsOperations.fetchProducts,
    fetchMore: productsActions.fetchMore,
};

export default compose(
    withNavigation,
    connect(
        mapStateToProps,
        mapStateToDispatch,
    ),
    branch(
        props => props.isLoading && props.products.length === 0,
        renderComponent(Loader),
    ),
    withHandlers({
        navigateToProductScreen: props => (item) => {
            props.navigation.push(screens.Product, {
                id: item.id,
                title: item.title,
            });
        },
        onEndReached: props => () => {
            props.fetchMore({ part: props.part + 1 });
        },
    }),
    lifecycle({
        componentDidUpdate(nextProps) {
            if (this.props.limit !== nextProps.limit) {
                this.props.fetchProducts(true);
            }
        },
        componentDidMount() {
            this.props.fetchProducts();
        },
    }),
    mapProps(props => ({
        ...props,
        renderProductButton: item => (
            <ProductButton
                {...item}
                key={item.id}
                onPress={() => props.navigateToProductScreen(item)}
            />
        ),
    })),
)(ProductListComponent);