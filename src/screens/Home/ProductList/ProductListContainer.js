import {
    compose,
    lifecycle,
    withHandlers,
    branch,
    renderComponent,
} from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import ProductListComponent from './ProductListComponent';
import * as productsOperations from '../../../modules/products/productsOperations';
import * as productsSelectors from '../../../modules/products/productsSelectors';
import screens from '../../../navigation/screens';
import { Loader } from '../../../components';

const mapStateToProps = state => ({
    products: productsSelectors.getProducts(state),
    isLoading: state.products.isLoading,
    isError: state.products.isError,
});

const mapStateToDispatch = {
    fetchProducts: productsOperations.fetchProducts,
};

export default compose(
    withNavigation,
    connect(
        mapStateToProps,
        mapStateToDispatch,
    ),
    branch(
        props => props.isLoading,
        renderComponent(Loader),
        branch(
            props => props.isError,
            // TODO: Change Loader by ShowError component
            renderComponent(Loader),
        ),
    ),
    withHandlers({
        navigateToProductScreen: props => (item) => {
            props.navigation.push(screens.Product, {
                id: item.id,
                title: item.title,
            });
        },
    }),
    lifecycle({
        componentDidMount() {
            this.props.fetchProducts();
        },
    }),
)(ProductListComponent);