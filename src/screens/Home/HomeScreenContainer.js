import { hoistStatics, compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreenComponent';
import * as productsOperations from '../../modules/products/productsOperations';
import * as productsSelectors from '../../modules/products/productsSelectors';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    language: state.app.language,
    allProductsCount: state.products.allProductsCount,
    downloadedProductsCount: productsSelectors.getDownloadedProductsCount(state),
});

const mapDispatchToProps = {
    fetchProducts: productsOperations.fetchProducts,
    getProductsCount: productsOperations.getProductsCount,
};

export default hoistStatics(
    compose(
        connect(
            mapStateToProps,
            mapDispatchToProps,
        ),
        lifecycle({
            componentDidMount() {
                this.props.fetchProducts();
                this.props.getProductsCount();
            },
        }),
        withLanguageOnChange('language', 'main.home.header'),
    ),
)(HomeScreen);