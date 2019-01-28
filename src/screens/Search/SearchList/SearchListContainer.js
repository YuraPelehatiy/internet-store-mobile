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
import SearchListComponent from './SearchListComponent';
import * as searchOperations from '../../../modules/search/searchOperations';
import * as searchSelectors from '../../../modules/search/searchSelectors';
import * as searchActions from '../../../modules/search/searchActions';
import screens from '../../../navigation/screens';
import { Loader, ProductButton } from '../../../components';

const mapStateToProps = state => ({
    products: searchSelectors.getProducts(state),
    isLoading: state.search.isLoading,
    isError: state.search.isError,
    part: state.search.part,
    limit: state.search.limit,
    offset: state.search.offset,
    search: state.search.search,
});

const mapDispatchToProps = {
    fetchProducts: searchOperations.fetchProductsSearch,
    fetchMore: searchActions.fetchMoreSearch,
};

export default compose(
    withNavigation,
    connect(
        mapStateToProps,
        mapDispatchToProps,
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
            if (this.props.offset !== nextProps.offset) {
                this.props.fetchProducts(true);
            }
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
)(SearchListComponent);