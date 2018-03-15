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

          <div className="Product__specifications-list">
            <ul className="list list--no-padding-left list--squared Product__specification">
              <li>Lorem ipsum dolor sit amet, consectetur </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>

          <div className="Product__color-picker color-picker">
            <p className="color-picker__title">
              Color:
              <span className="color-picker__selected-color color-picker__selected-color--dark-blue">
                DARK BLUE
              </span>
            </p>
            <span className="color-picker__color color-picker__color--dark-blue color-picker__color--selected">
              DB
            </span>
            <span className="color-picker__color color-picker__color--blue">
              B
            </span>
            <span className="color-picker__color color-picker__color--gray">
              Y
            </span>
            <span className="color-picker__color color-picker__color--black">
              R
            </span>
          </div>

          <div className="Product__size-picker size-picker">
            <span className="size-picker__title">Size: </span>

            <span className="size-picker__size size-picker__size--out-of-stock">
              37
            </span>
            <span className="size-picker__size size-picker__size--selected">
              38
            </span>
            <span className="size-picker__size">39</span>
            <span className="size-picker__size">40</span>
            <span className="size-picker__size">41</span>
            <span className="size-picker__size">42</span>
          </div>

          <button className="Product__add-to-cart btn btn--catchy btn--center-content">
            <i className="fas fa-cart-arrow-down" /> ADD TO CART
          </button>
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
