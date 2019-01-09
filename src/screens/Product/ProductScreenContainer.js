import { compose, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import ProductScreenComponent from './ProductScreenComponent';
// import * as productsOperations from '../../modules/products/productsOperations';
import * as productsSelectors from '../../modules/products/productsSelectors';
import * as cartActions from '../../modules/cart/cartActions';


const mapStateToProps = (state, props) => ({
    product: productsSelectors.getProduct(state, props.navigation.getParam('id')),
});

const mapStateToDispatch = {
    addItemToCart: cartActions.add,
};


export default hoistStatics(
    compose(
        connect(mapStateToProps, mapStateToDispatch),
    ),
)(ProductScreenComponent);