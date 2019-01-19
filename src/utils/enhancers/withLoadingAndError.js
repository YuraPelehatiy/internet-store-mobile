import { branch, renderComponent } from 'recompose';
import Loader from '../../components/Loader/Loader';

const withLoadingAndError = (isLoadingPropsMaper, isErrorPropsMaper) => (
    branch(
        props => isLoadingPropsMaper(props),
        renderComponent(Loader),
        branch(
            props => isErrorPropsMaper(props),
            renderComponent(),
        ),
    )
);

export default withLoadingAndError;