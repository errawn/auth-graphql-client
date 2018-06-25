import React from 'react'
import PropTypes from 'prop-types'

import { Alert } from 'react-bootstrap'

const AlertCommon = ({ type, message }) => (
	<Alert bsStyle={type}>
		<p>{message}</p>
	</Alert>
)

AlertCommon.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
}

export default AlertCommon