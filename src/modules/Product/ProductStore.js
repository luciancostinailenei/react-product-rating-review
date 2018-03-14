import { action, computed, observable } from 'mobx'

import moment from 'moment'

class ProductStore {
  @observable reviews = []
  @observable isProductReviewFormDisplayed = false

  @action
  addReview = review => {
    this.reviews.push(review)
  }

  @computed
  get reviewsCount() {
    return this.reviews.length
  }

  @computed
  get sortedReviews() {
    const sortedReviews = this.reviews.sort((a, b) => {
      if (moment(a.date) > moment(b.date)) {
        return -1
      }

      if (moment(a.date) < moment(b.date)) {
        return 1
      }

      return 0
    })

    return sortedReviews
  }

  @computed
  get averageScore() {
    const numberOfReviews = this.reviewsCount

    if (numberOfReviews === 0) {
      return 0
    }

    const scoreSum = this.reviews.reduce((acc, review) => {
      return acc + review.rating
    }, 0)

    const averageScore = scoreSum / numberOfReviews
    return averageScore % 1 === 0 ? averageScore : averageScore.toFixed(1)
  }
}

const store = new ProductStore()
export default store
