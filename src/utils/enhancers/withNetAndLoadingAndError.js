import { branch, renderComponent } from 'recompose';
import Loader from '../../components/Loader/Loader';

const withNetAndLoadingAndError = (
    isNetPropsMaper,
    isLoadingPropsMaper,
    isErrorPropsMaper,
) => (
    branch(
        props => isNetPropsMaper(props),
        renderComponent(Loader /* Show error with message that no internet connection */),
        branch(
            props => isLoadingPropsMaper(props),
            renderComponent(Loader /* Show loader */),
            branch(
                props => isErrorPropsMaper(props),
                renderComponent(/* Show error with message */),
            ),
        ),
    )
);

export default withNetAndLoadingAndError;