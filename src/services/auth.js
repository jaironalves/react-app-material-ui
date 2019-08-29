export const TOKEN_KEY_CLIENT = '@ls-app-client-auth-token'
export const TOKEN_KEY_PARTNER = '@ls-app-partner-auth-token'
export const TOKEN_KEY_REPRESENTATIVE = '@ls-app-representative-auth-token'

const isAuthenticated = tokenKey => localStorage.getItem(tokenKey) !== null
const setToken = (tokenKey, token) => localStorage.setItem(tokenKey, token)
export const getToken = tokenKey => localStorage.getItem(tokenKey)
const logout = tokenKey => localStorage.removeItem(tokenKey)

const isAuthenticatedClient = () => isAuthenticated(TOKEN_KEY_CLIENT)
const isAuthenticatedPartner = () => isAuthenticated(TOKEN_KEY_PARTNER)
const isAuthenticatedRepresentative = () =>
  isAuthenticated(TOKEN_KEY_REPRESENTATIVE)

const setTokenClient = token => setToken(TOKEN_KEY_CLIENT, token)
const setTokenPartner = token => setToken(TOKEN_KEY_PARTNER, token)
const setTokenRepresentative = token =>
  setToken(TOKEN_KEY_REPRESENTATIVE, token)

const logoutClient = () => logout(TOKEN_KEY_CLIENT)
const logoutPartner = () => logout(TOKEN_KEY_PARTNER)
const logoutRepresentative = () => logout(TOKEN_KEY_REPRESENTATIVE)

export {
  isAuthenticatedClient,
  isAuthenticatedPartner,
  isAuthenticatedRepresentative,
}
export { setTokenClient, setTokenPartner, setTokenRepresentative }
export { logoutClient, logoutPartner, logoutRepresentative }
