import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import CartListComponent from './CartListComponent';
import * as cartSelectors from '../../../modules/cart/cartSelectors';
import * as cartActions from '../../../modules/cart/cartActions';
import screens from '../../../navigation/screens';

const mapStateToProps = state => ({
    products: cartSelectors.getProducts(state),
});

const mapStateToDispatch = {
    removeItemFromCart: cartActions.remove,
};


export default compose(
    withNavigation,
    connect(mapStateToProps, mapStateToDispatch),
    withHandlers({
        navigateToProductScreen: props => item => props.navigation.push(screens.Product, {
            id: item.id,
            title: item.title,
        }),
    }),
)(CartListComponent);