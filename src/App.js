import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import Product from './modules/Product/Product'

import ProductStore from './modules/Product/ProductStore'

export default class App extends Component {
  render() {
    return (
      <Provider ProductStore={ProductStore}>
        <Product />
      </Provider>
    )
  }
}
