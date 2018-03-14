import ProductStore from './ProductStore'

describe('ProductStore', () => {
  it('adds new reviews', () => {
    ProductStore.addReview({
      rating: 2,
      title: 'Test Review Title',
      text: 'Review Text Test',
      user: 'Lucian',
      date: new Date()
    })

    ProductStore.addReview({
      rating: 5,
      title: 'Test Review Title 2',
      text: 'Review Text Test 2',
      user: 'Lucian',
      date: new Date()
    })

    expect(ProductStore.reviewsCount).toBe(2)
  })
})
