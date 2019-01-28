import { connect } from 'react-redux';
import { hoistStatics, compose, lifecycle } from 'recompose';
import CartScreenComponent from './CartScreenComponent';
import * as cartOperations from '../../modules/cart/cartOperations';
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
    fetchProductsByIds: cartOperations.fetchProductsByIds,
};

export default hoistStatics(
    compose(
        connect(
            mapStateToProps,
            mapDispatchToProps,
        ),
        lifecycle({
            componentDidMount() {
                this.props.fetchProductsByIds();
            },
        }),
        withLanguageOnChange('language', 'main.cart.header'),
    ),
)(CartScreenComponent);