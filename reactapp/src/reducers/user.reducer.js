export default function (token = '', action = {}) {

  switch (action.type) {
    case 'addToken':
      let newToken = action.payload
      return newToken

      break

    case 'removeToken':
      return ''

      break

    default:
      return token

      break
  }

}