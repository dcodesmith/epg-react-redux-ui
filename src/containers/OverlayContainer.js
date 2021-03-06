import { connect } from 'react-redux';

import { hideModal } from '../actions/modalActions';

import Overlay from '../components/overlay';

const mapStateToProps = ({ modal: { isOpen, data } }) => ({ isOpen, data });

export default connect(mapStateToProps, { onHideModal: hideModal })(Overlay);
