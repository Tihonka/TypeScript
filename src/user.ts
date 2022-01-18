import { renderBlock } from './lib.js'

// const name = 'Wade Warren'
// const avatar = '/img/avatar.png'
export function renderUserBlock (favoriteItemsAmount: number, name?: string, avatar?: string) {
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
