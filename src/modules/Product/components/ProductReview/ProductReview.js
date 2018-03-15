import React from 'react'
import Moment from 'moment'
import PropTypes from 'prop-types'

import './ProductReview.scss'

import ProductRating from '../ProductRating/ProductRating'

const ProductReview = props => {
  return (
    <li className="ProductReview">
      <h4 className="ProductReview__title">{props.reviewData.title}</h4>
      <div className="ProductReview__rating">
        <ProductRating
          inputIdIndex={props.index}
          scoreValue={props.reviewData.rating}
        />
        <div className="ProductReview__info">
          <span className="ProductReview__user-name">
            {props.reviewData.user}
          </span>
          &nbsp; | &nbsp;
          <span className="ProductReview__date">
            {Moment(props.reviewData.date).format('DD/MM/YYYY')}
          </span>
        </div>
      </div>
      <div />
      <p className="ProductReview__text">{props.reviewData.text}</p>
    </li>
  )
}

ProductReview.propTypes = {
  reviewData: PropTypes.shape({
    rating: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.date
  }),
  index: PropTypes.number
}

export default ProductReview
