import { connect } from 'react-redux';
import { hoistStatics, compose, lifecycle } from 'recompose';
import WishScreenComponent from './WishScreenComponent';
import * as wishesOperations from '../../modules/wishes/wishesOperations';
import * as wishesSelectors from '../../modules/wishes/wishesSelectors';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    totalPrice: wishesSelectors.getTotalPrice(state),
    totalProductCount: wishesSelectors.getCountItems(state),
    language: state.app.language,
});

const mapDispatchToProps = {
    fetchProductsByIds: wishesOperations.fetchProductsByIds,
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
        withLanguageOnChange('language', 'main.wishes.header'),
    ),
)(WishScreenComponent);