import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import ProductListComponent from './ProductListComponent';
import * as productsOperations from '../../../modules/products/productsOperations';
import * as productsSelectors from '../../../modules/products/productsSelectors';
import screens from '../../../navigation/screens';

const mapStateToProps = state => ({
    products: productsSelectors.getProducts(state),
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