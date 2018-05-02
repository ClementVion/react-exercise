import React, { Component } from 'react'
import { TweenMax, EasePack } from 'gsap'
import './index.css'

class HoverCard extends Component {

  constructor(props) {
    super(props);
    this.hoverCard = React.createRef();
    this.imgLeft  = React.createRef();
    this.imgRight = React.createRef();
  }

  render() {
    return(
      <div className="HoverCard" ref={this.hoverCard}>
        <img className="HoverCard__Img" ref={this.imgLeft} src="img/hover1.png" alt="jeans" />
        <img className="HoverCard__Img" ref={this.imgRight} src="img/hover2.png" alt="jeans" />
      </div>
    )
  }

  componentDidMount() {
    const hoverCard = this.hoverCard.current;
    const imgLeft = this.imgLeft.current;
    const imgRight = this.imgRight.current;

    // Trigger opacity of hoverCard on hover
    hoverCard.addEventListener('mouseenter', () => {
      TweenMax.to(hoverCard, 0.2, {opacity: 1, ease: Power2.ease}); // eslint-disable-line
    })

    hoverCard.addEventListener('mouseleave', () => {
      TweenMax.to(hoverCard, 0.2, {opacity: 0, ease: Power2.ease}); // eslint-disable-line
    })

    // Show different images on hover of the left or the right side
    hoverCard.addEventListener('mousemove', (e) => {
      if (e.layerX > (hoverCard.offsetWidth / 2)) {
        imgRight.classList.add('hidden');
        imgLeft.classList.remove('hidden');
      } else {
        imgLeft.classList.add('hidden');
        imgRight.classList.remove('hidden');
      }
    })
  }

}

export default HoverCard
