import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './Product.scss'

import Thumbnail from '../shared-components/Thumbnail/Thumbnail'
import ProductReviewsList from './components/ProductReviewsList/ProductReviewsList'
import ProductReviewForm from './components/ProductReviewForm/ProductReviewForm'
import ColorPicker from '../shared-components/ColorPicker/ColorPicker'
import SizePicker from '../shared-components/SizePicker/SizePicker'
import SpecificationsList from '../shared-components/SpecificationsList/SpecificationsList'

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
          <Thumbnail
            type="full"
            source="https://www.shoesvalley.nl/image/cache/nike/Air%20Max2017/2052-1-800x800.jpg"
            alt="Nike AirMax 7"
          />
        </div>

        <div className="Product__product-details">
          <h2 className="Product__title">Product title TST42chk</h2>

          <p className="Product__price">$193</p>

          <div className="Product__specifications-list">
            <SpecificationsList />
          </div>

          <div className="Product__color-picker">
            <ColorPicker />
          </div>

          <div className="Product__size-picker">
            <SizePicker />
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
