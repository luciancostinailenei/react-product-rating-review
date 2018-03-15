import React, { Component } from 'react'
import { inject } from 'mobx-react'

import './ProductReviewForm.scss'

import ProductRating from '../ProductRating/ProductRating'

@inject('ProductStore')
export default class ProductReviewForm extends Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState()

    this.submitReview = this.submitReview.bind(this)
    this.setReviewTitle = this.setReviewTitle.bind(this)
    this.setReviewText = this.setReviewText.bind(this)
    this.changeRating = this.changeRating.bind(this)
  }

  getInitialState() {
    return {
      rating: 0,
      title: '',
      text: ''
    }
  }

  areInputsFilled() {
    const { rating, title, text } = this.state
    return rating !== 0 && title !== '' && text !== ''
  }

  submitReview() {
    if (!this.areInputsFilled()) {
      return
    }

    const productReview = {
      ...this.state,
      user: 'Lucian',
      date: new Date()
    }

    this.props.ProductStore.addReview(productReview)

    this.setState({ rating: 0, title: '', text: 'Review' })
    this.refs.ratingInput.wrappedInstance.resetVote()
    this.props.ProductStore.isProductReviewFormDisplayed = false
  }

  setReviewTitle(event) {
    this.setState({ title: event.target.value })
  }

  setReviewText(event) {
    this.setState({ text: event.target.value })
  }

  changeRating(value) {
    this.setState({ rating: value })
  }

  render() {
    return (
      <div className="ProductReviewForm">
        <div className="ProductReviewForm__rating">
          <span>Rate product: </span>

          <ProductRating
            ref="ratingInput"
            inputIdIndex="100"
            changeRatingHandler={this.changeRating}
          />
        </div>

        <div className="ProductReviewForm__title">
          <input
            onChange={this.setReviewTitle}
            value={this.state.title}
            type="text"
            placeholder="Review title"
          />
        </div>

        <div className="ProductReviewForm__text">
          <textarea
            placeholder="Review..."
            value={this.state.text}
            onChange={this.setReviewText}
          />
        </div>

        <div className="ProductReviewForm__submit">
          <button
            className={
              'btn btn--primary' +
              (!this.areInputsFilled() ? ' btn--disabled' : '')
            }
            onClick={this.submitReview}
            disabled={!this.areInputsFilled()}
          >
            Submit
          </button>
          <span>Rating and all inputs are required.</span>
        </div>
      </div>
    )
  }
}
