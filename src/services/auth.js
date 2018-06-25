import decode from 'jwt-decode'

// check if there is current user based on 
// stored token in browser's localstorage
export const checkAuth = () => { 
	const token = localStorage.getItem('token')

	try {
		decode(token)
	} catch(error) {
		return false
	}

	return true
}