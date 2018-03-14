import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './Product.scss'

import ProductThumbnail from './components/ProductThumbnail/ProductThumbnail'
import ProductReviewsList from './components/ProductReviewsList/ProductReviewsList'
import ProductReviewForm from './components/ProductReviewForm/ProductReviewForm'

@inject('ProductStore')
@observer
class Product extends Component {
  constructor(props) {
    super(props)

    this.displayReviewForm = this.displayReviewForm.bind(this)
  }

  displayReviewForm() {
    this.props.ProductStore.isProductReviewFormDisplayed = true
  }

  render() {
    return (
      <div className="Product layout layout--product">
        <div className="Product__product-thumbnail">
          <ProductThumbnail />
        </div>

        <div className="Product__product-details">
          <h2 className="Product__title">Product title TST42chk</h2>

          <p className="Product__price">$193</p>
        </div>

        <div className="Product__product-reviews">
          <div className="Product__product-reviews-header">
            <h3>Product Reviews</h3>

            <button
              className={
                'btn btn--primary' +
                (this.props.ProductStore.isProductReviewFormDisplayed
                  ? ' btn--disabled'
                  : '')
              }
              disabled={this.props.ProductStore.isProductReviewFormDisplayed}
              onClick={this.displayReviewForm}
            >
              ADD REVIEW
            </button>
          </div>

          <div
            className={
              'Product__review-form' +
              (this.props.ProductStore.isProductReviewFormDisplayed
                ? ''
                : ' Product__review-form--hidden')
            }
          >
            <ProductReviewForm />
          </div>

          <ProductReviewsList />
        </div>
      </div>
    )
  }
}

export default Product
