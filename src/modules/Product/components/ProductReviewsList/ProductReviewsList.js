import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './ProductReviewsList.scss'

import ProductReview from '../ProductReview/ProductReview'

@inject('ProductStore')
@observer
export default class ProductReviewsList extends Component {
  render() {
    return (
      <div className="ProductReviewsList">
        <div className="ProductReviewsList__reviews-overview">
          <p className="ProductReviewsList__general-rating">
            General Product Rating:
            <span className="ProductReviewsList__average-score">
              {this.props.ProductStore.averageScore}
            </span>
          </p>

          <p className="ProductReviewsList__reviews-number">
            <b> {this.props.ProductStore.reviewsCount} </b> reviews
          </p>
        </div>

        <ul className="ProductReviewsList__reviews-list list list--no-bullets list--no-padding-left">
          {this.props.ProductStore.sortedReviews.map((review, index) => {
            return (
              <ProductReview reviewData={review} key={index} index={index} />
            )
          })}
        </ul>
      </div>
    )
  }
}
