import {
    compose, hoistStatics, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import ProductScreenComponent from './ProductScreenComponent';
import * as productsSelectors from '../../modules/products/productsSelectors';
import * as cartActions from '../../modules/cart/cartActions';
import * as wishesOperations from '../../modules/wishes/wishesOperations';
import * as wishesSelectors from '../../modules/wishes/wishesSelectors';

const mapStateToProps = (state, props) => ({
    product: productsSelectors.getProduct(state, props.navigation.getParam('id')),
    isWishInItems: wishesSelectors.getCheckWishInItems(state, props.navigation.getParam('id')),
    isWishInProgress: wishesSelectors.getCheckWishInProgress(state, props.navigation.getParam('id')),
});

const mapDispatchToProps = {
    addItemToCart: cartActions.add,
    addWish: wishesOperations.addWish,
    removeWish: wishesOperations.removeWish,
};

export default hoistStatics(
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withHandlers({
            addOrRemoveWish: props => ({ id }) => {
                if (!props.isWishInItems) {
                    props.addWish(id);
                } else {
                    props.removeWish(id);
                }
            },
        }),
    ),
)(ProductScreenComponent);