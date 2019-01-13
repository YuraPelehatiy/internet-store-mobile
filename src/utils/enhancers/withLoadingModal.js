import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { LoaderModal } from '../../components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const withLoadingModal = (propsMapper, loadingText) => BaseComponent => (
    props => (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <BaseComponent {...props} />
            <LoaderModal
                isVisible={propsMapper(props)}
                loadingText={loadingText}
            />
        </SafeAreaView>
    )
);

/* const withLoadingModal_ = (propsMapper, loadingText) => BaseComponent => (
    props => (
        class Wrapper extends React.Component {
            constructor() {
                super(props);
                this.state = {
                    isVisibleModal: false,
                };

                this.onChangeVisbleModal = this.onChangeVisbleModal.bind(this);
            }

            componentDidUpdate() {
                if (this.state.isVisibleModal === propsMapper(this.props)) {
                    return;
                }
                this.onChangeVisbleModal(propsMapper(this.props));
            }

            onChangeVisbleModal(isVisible) {
                this.setState({ isVisibleModal: isVisible });
            }

            render() {
                return (
                    <SafeAreaView style={styles.container}>
                        <BaseComponent {...this.props} />
                        <LoaderModal
                            isVisible={this.state.isVisibleModal}
                            loadingText={loadingText}
                        />
                    </SafeAreaView>
                );
            }
        }
    )
)(); */

export default withLoadingModal;