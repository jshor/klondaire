import Space from '@/store/models/Space'

export default class Card extends Space {
  constructor (suit, rank) {
    super()

    this.suit = suit
    this.rank = rank
    this.child = null
    this.revealed = false
  }
}
