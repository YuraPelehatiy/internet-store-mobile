import { branch, renderComponent } from 'recompose';
import Loader from '../../components/Loader/Loader';

const withLoading = isLoadingPropsMaper => branch(
    props => isLoadingPropsMaper(props),
    renderComponent(Loader),
);

export default withLoading;