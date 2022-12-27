// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  leftClicked = () => {
    const {left} = this.props
    left()
  }

  rightClicked = () => {
    const {right} = this.props
    right()
  }

  render() {
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList

    return (
      <div className="item">
        <img src={imgUrl} alt={username} />
        <div className="arrows-container">
          <button testid="leftArrow" onClick={this.leftClicked} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="user-name">{username}</p>
          <button testid="rightArrow" type="button" onClick={this.rightClicked}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
