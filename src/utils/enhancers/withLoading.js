import { branch, renderComponent } from 'recompose';
import Loader from '../../components/Loader/Loader';

const withLoading = isLoading => branch(
    props => props[isLoading],
    // propsMaper(),
    renderComponent(Loader),
);

export default withLoading;