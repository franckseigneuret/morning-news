export default function (wishList = [], action) {

  switch (action.type) {
    case 'addArticle':
      const check = wishList.filter((item) => (item.title === action.articleLike.title))

      if(check.length > 0) {
        return wishList
      } else {
        let wishListCopy = [...wishList]
        wishListCopy.push(action.articleLike)
        return wishListCopy
      }

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