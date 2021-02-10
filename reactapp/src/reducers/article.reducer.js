export default function (wishList = [], action) {

  switch (action.type) {
    case 'addArticle':
      let wishListCopy = [...wishList]
      wishListCopy.push(action.articleLike)
      return wishListCopy

      break

    case 'deleteArticle':
      let wishListCopy2 = [...wishList]
      wishListCopy2 = wishListCopy2.filter((item) => action.articleTitleDeleted !== item.title)
      return wishListCopy2

      break

    default:
      return wishList

      break
  }

}