// check if there is current user based on 
// stored token in browser's localstorage
export const checkAuth = () => { 
	if (localStorage.getItem('token'))
		return true
	return false 
}