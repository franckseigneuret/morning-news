export default function (token = '', action = {}) {

  switch (action.type) {
    case 'addToken':
      let newToken = action.payload
      return newToken

      break

    default:
      return token

      break
  }

}