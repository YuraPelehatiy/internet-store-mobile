import { compose, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ProductSceen from './ProductScreenComponent';
// import * as productsOperations from '../../modules/products/productsOperations';
import * as productsSelectors from '../../modules/products/productsSelectors';


const mapStateToProps = (state, props) => ({
    product: productsSelectors.getProduct(state, props.navigation.getParam('id')),
});


export default hoistStatics(
    compose(
        connect(mapStateToProps),
    ),
)(ProductSceen);