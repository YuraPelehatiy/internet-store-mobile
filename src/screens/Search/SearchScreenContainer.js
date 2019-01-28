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


const mapStateToProps = state => ({
    language: state.app.language,
});

const mapDispatchToProps = {
    fethProducts: searchOperations.fetchProductsSearch,
    setSearchValue: searchActions.setSearchValue,
    clearProductsIds: searchActions.clearProductsIds,
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
                }, 1000);
                props.onChangeTimeoutId(timeoutId);
                // props.setSearchValue({ value: props.searchValue });
            },
        }),
        lifecycle({
            componentDidMount() {
                this.props.navigation.setParams({
                    onChangeTextSearch: this.props.onChangeTextSearch,
                    onEndEditingSearch: this.props.onEndEditingSearch,
                });
            },
        }),
        withLanguageOnChange('language', 'main.search.header'),
    ),
)(SearchScreen);