import { renderBlock } from './lib.js'

export function renderUserBlock (name: string, avatar: string, favoriteItemsAmount: number | string) {
  const favoritesCaption: number | string = favoriteItemsAmount >= 1 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems: boolean = favoriteItemsAmount > 1 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${ avatar }" alt="${ name }"/> 
      <div class="info">
          <p class="name">${ name }</p>
          <p class="fav">
            <i class="heart-icon${ hasFavoriteItems ? ' active' : '' }"></i>${ favoritesCaption } 
          </p>
      </div>
    </div>
    `
  )
}
