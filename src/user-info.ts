export class User {
  username: string
  avatarUrl: string
    
  constructor (username: string, avatarUrl: string) {
    this.username = username
    this.avatarUrl = avatarUrl
  }
}
  
const user = new User('Wade Warren', '/img/avatar.png')

localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('favoriteItemsAmount', '8')
  
export function getUserData() {
  const user: unknown = JSON.parse(localStorage.getItem('user'))
  Object.setPrototypeOf(user, User.prototype);

  if (user instanceof User) {
    return {name: user.username, avatar: user.avatarUrl}
  } else {
    console.log('user not found');
  }
  
}

export function getFavoritesAmount() {
  const favoriteItemsAmount = parseInt(localStorage.getItem('favoriteItemsAmount'))
  return favoriteItemsAmount
}