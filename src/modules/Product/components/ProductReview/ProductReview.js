import React from 'react'
import Moment from 'react-moment'

import './ProductReview.scss'

import ProductRating from '../ProductRating/ProductRating'

const ProductReview = props => {
  return (
    <li className="ProductReview">
      <h4 className="ProductReview__title">{props.reviewData.title}</h4>
      <div className="ProductReview__rating">
        <ProductRating
          inputIdIndex={props.index}
          changeRatingHandler={this.changeRating}
          scoreValue={props.reviewData.rating}
        />
        <div className="ProductReview__info">
          <span className="ProductReview__user-name">
            {props.reviewData.user}
          </span>
          &nbsp; | &nbsp;
          <span>
            <Moment format="DD/MM/YYYY">{props.reviewData.date}</Moment>
          </span>
        </div>
      </div>
      <div />
      <p>{props.reviewData.text}</p>
    </li>
  )
}

export default ProductReview
