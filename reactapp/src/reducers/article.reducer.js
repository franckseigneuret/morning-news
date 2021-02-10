export default function (wishList = [], action) {

  switch (action.type) {
    case 'addArticle':
      let wishListCopy = [...wishList]
      wishListCopy.push(action.articleLike)
      return wishListCopy

      break

    default:
      return wishList

      break
  }

}