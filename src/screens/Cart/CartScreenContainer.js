import { connect } from 'react-redux';
import { hoistStatics, compose } from 'recompose';
import CartScreenComponent from './CartScreen';
import * as cartSelectors from '../../modules/cart/cartSelectors';
import * as cartActions from '../../modules/cart/cartActions';

const mapStateToProps = state => ({
    totalPrice: cartSelectors.getTotalPrice(state),
    totalProductCount: cartSelectors.getCountItems(state),
});

const mapStateToDispatch = {
    removeItemFromCart: cartActions.remove,
    increase: cartActions.increase,
    decrease: cartActions.decrease,
};

export default hoistStatics(
    compose(
        connect(
            mapStateToProps,
            mapStateToDispatch,
        ),
    ),
)(CartScreenComponent);