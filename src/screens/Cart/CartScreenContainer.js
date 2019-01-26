import { connect } from 'react-redux';
import { hoistStatics, compose } from 'recompose';
import CartScreenComponent from './CartScreenComponent';
import * as cartSelectors from '../../modules/cart/cartSelectors';
import * as cartActions from '../../modules/cart/cartActions';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    totalPrice: cartSelectors.getTotalPrice(state),
    totalProductCount: cartSelectors.getCountItems(state),
    language: state.app.language,
});

const mapDispatchToProps = {
    removeItemFromCart: cartActions.remove,
    increase: cartActions.increase,
    decrease: cartActions.decrease,
};

export default hoistStatics(
    compose(
        connect(
            mapStateToProps,
            mapDispatchToProps,
        ),
        withLanguageOnChange('language', 'main.cart.header'),
    ),
)(CartScreenComponent);