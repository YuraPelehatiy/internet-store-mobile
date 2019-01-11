import { branch, renderComponent } from 'recompose';
import { Loader } from '../../components';

const withLoading = isLoading => branch(
    props => props[isLoading],
    renderComponent(Loader),
);

export default withLoading;