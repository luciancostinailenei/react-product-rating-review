import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import './ProductRating.scss'

@inject('ProductStore')
@observer
export default class ProductRating extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkedStarId: null
    }

    this.resetVote = this.resetVote.bind(this)
  }

  changeRating(id) {
    if (this.props.scoreValue) {
      return
    }

    this.setState({ checkedStarId: id })

    this.props.changeRatingHandler(parseInt(id, 10))
  }

  isStarChecked(id) {
    if (this.props.scoreValue) {
      return this.props.scoreValue === parseInt(id, 10)
    }

    return this.state.checkedStarId === id
  }

  resetVote() {
    this.setState({ checkedStarId: null })
  }

  render() {
    return (
      <span
        className={
          'ProductRating' +
          (this.props.scoreValue ? ' ProductRating--disabled' : '')
        }
      >
        <input
          onChange={() => {
            this.changeRating('5')
          }}
          value={this.props.inputIdIndex}
          type="radio"
          className="ProductRating__input"
          id={'ProductRating__input-' + this.props.inputIdIndex + '-5'}
          name={'ProductRating__input-' + this.props.inputIdIndex}
          checked={this.isStarChecked('5')}
        />
        <label
          htmlFor={'ProductRating__input-' + this.props.inputIdIndex + '-5'}
          className="ProductRating__star"
        />

        <input
          onChange={() => {
            this.changeRating('4')
          }}
          value={this.props.inputIdIndex}
          type="radio"
          className="ProductRating__input"
          id={'ProductRating__input-' + this.props.inputIdIndex + '-4'}
          name={'ProductRating__input-' + this.props.inputIdIndex}
          checked={this.isStarChecked('4') ? true : false}
        />
        <label
          htmlFor={'ProductRating__input-' + this.props.inputIdIndex + '-4'}
          className="ProductRating__star"
        />

        <input
          onChange={() => {
            this.changeRating('3')
          }}
          value={this.props.inputIdIndex}
          type="radio"
          className="ProductRating__input"
          id={'ProductRating__input-' + this.props.inputIdIndex + '-3'}
          name={'ProductRating__input-' + this.props.inputIdIndex}
          checked={this.isStarChecked('3')}
        />
        <label
          htmlFor={'ProductRating__input-' + this.props.inputIdIndex + '-3'}
          className="ProductRating__star"
        />

        <input
          onChange={() => {
            this.changeRating('2')
          }}
          value={this.props.inputIdIndex}
          type="radio"
          className="ProductRating__input"
          id={'ProductRating__input-' + this.props.inputIdIndex + '-2'}
          name={'ProductRating__input-' + this.props.inputIdIndex}
          checked={this.isStarChecked('2')}
        />
        <label
          htmlFor={'ProductRating__input-' + this.props.inputIdIndex + '-2'}
          className="ProductRating__star"
        />

        <input
          onChange={() => {
            this.changeRating('1')
          }}
          value={this.props.inputIdIndex}
          type="radio"
          className="ProductRating__input"
          id={'ProductRating__input-' + this.props.inputIdIndex + '-1'}
          name={'ProductRating__input-' + this.props.inputIdIndex}
          checked={this.isStarChecked('1')}
        />
        <label
          htmlFor={'ProductRating__input-' + this.props.inputIdIndex + '-1'}
          className="ProductRating__star"
        />
      </span>
    )
  }
}

ProductRating.propTypes = {
  scoreValue: PropTypes.number,
  inputIdIndex: PropTypes.string
}
