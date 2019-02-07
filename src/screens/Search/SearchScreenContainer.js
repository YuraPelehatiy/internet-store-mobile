import {
    hoistStatics,
    compose,
    withHandlers,
    withStateHandlers,
    lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import SearchScreen from './SearchScreenComponent';
import { withLanguageOnChange } from '../../utils/enhancers';
import * as searchOperations from '../../modules/search/searchOperations';
import * as searchActions from '../../modules/search/searchActions';
import * as searchSelectors from '../../modules/search/searchSelectors';


const mapStateToProps = state => ({
    language: state.app.language,
    allProductsCount: state.search.allProductsCount,
    downloadedProductsCount: searchSelectors.getDownloadedProductsCount(state),
});

const mapDispatchToProps = {
    fethProducts: searchOperations.fetchProductsSearch,
    setSearchValue: searchActions.setSearchValue,
    clearProductsIds: searchActions.clearProductsIds,
    getProductsCount: searchOperations.getProductsCountSearch,
    clearPreviousSearchResult: searchActions.clearPreviousSearchResult,
};

export default hoistStatics(
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        withStateHandlers({
            searchValue: '',
            delayToFetch: undefined, // id of timeout
        }, {
            onChangeTextSearch: () => value => ({
                searchValue: value,
            }),
            onChangeTimeoutId: () => value => ({
                delayToFetch: value,
            }),
        }),
        withHandlers({
            onEndEditingSearch: props => () => {
                if (props.searchValue.trim().length === 0) {
                    return;
                }
                props.setSearchValue({ value: props.searchValue });
                props.clearProductsIds();
                props.fethProducts();
                props.getProductsCount();
            },
            onChangeText: props => () => {
                if (props.searchValue.trim().length === 0) {
                    return;
                }

                if (props.delayToFetch) {
                    clearTimeout(props.delayToFetch);
                    props.onChangeTimeoutId(undefined);
                }
                const timeoutId = setTimeout(() => {
                    props.clearProductsIds();
                    props.setSearchValue({ value: props.searchValue });
                    props.fethProducts();
                    props.getProductsCount();
                }, 1000);
                props.onChangeTimeoutId(timeoutId);
            },
        }),
        lifecycle({
            componentDidMount() {
                this.props.navigation.setParams({
                    onChangeTextSearch: this.props.onChangeTextSearch,
                    onEndEditingSearch: this.props.onEndEditingSearch,
                });
            },
            componentWillUnmount() {
                this.props.setSearchValue({ value: '' });
                this.props.clearPreviousSearchResult();
            },
        }),
        withLanguageOnChange('language', 'main.search.header'),
    ),
)(SearchScreen);