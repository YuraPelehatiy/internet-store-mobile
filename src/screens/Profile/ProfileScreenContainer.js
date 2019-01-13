import { connect } from 'react-redux';
import { hoistStatics } from 'recompose';
import ProfileScreenComponent from './ProfileScreenComponent';

const mapStateToProps = state => ({
    user: state.app.user,
});

export default hoistStatics(
    connect(mapStateToProps),
)(ProfileScreenComponent);