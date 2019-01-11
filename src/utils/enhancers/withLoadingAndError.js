import { branch, renderComponent } from 'recompose';
import { Loader } from '../../components';

const withLoadingAndError = (isLoading, isError) => (
    branch(
        props => props[isLoading],
        renderComponent(Loader),
        branch(
            props => props[isError],
            renderComponent(),
        ),
    )
);

export default withLoadingAndError;