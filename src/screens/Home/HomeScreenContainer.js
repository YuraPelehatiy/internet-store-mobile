import { hoistStatics, compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreenComponent';
import * as productsOperations from '../../modules/products/productsOperations';
import { withLanguageOnChange } from '../../utils/enhancers';

const mapStateToProps = state => ({
    language: state.app.language,
});

const mapDispatchToProps = {
    fetchProducts: productsOperations.fetchProducts,
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
            },
        }),
        withLanguageOnChange('language', 'main.home.header'),
    ),
)(HomeScreen);