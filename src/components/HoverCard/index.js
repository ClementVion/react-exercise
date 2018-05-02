import React, { Component } from 'react'
import { TweenMax } from 'gsap'
import './index.css'

class HoverCard extends Component {

  constructor(props) {
    super(props);
    this.hoverCard = React.createRef();
    this.imgLeft  = React.createRef();
    this.imgRight = React.createRef();
    this.colors = React.createRef();
    this.price = React.createRef();
  }

  render() {
    return(
      <div className="HoverCard" ref={this.hoverCard}>

        <img className="HoverCard__Img" ref={this.imgLeft} src="img/hover1.png" alt="jeans" />
        <img className="HoverCard__Img" ref={this.imgRight} src="img/hover2.png" alt="jeans" />

        <div className="HoverCard__Infos">
          <ul className="HoverCard__InfosColors" ref={this.colors}>
            <li className="HoverCard__InfosColor"></li>
            <li className="HoverCard__InfosColor"></li>
            <li className="HoverCard__InfosColor"></li>
          </ul>
          <p className="HoverCard__InfosPrice" ref={this.price}>$119,95</p>
        </div>

      </div>
    )
  }

  componentDidMount() {
    const hoverCard = this.hoverCard.current;
    const imgLeft = this.imgLeft.current;
    const imgRight = this.imgRight.current;
    const colors = this.colors.current;
    const price = this.price.current;

    // Trigger hoverCard on hover
    hoverCard.addEventListener('mouseenter', () => {
      TweenMax.to(hoverCard, 0.2, {opacity: 1, ease: Power2.ease}); // eslint-disable-line
      TweenMax.to(price, 0.3, {y: 0, delay: 0.15, opacity: 1, ease: Power1.ease}); // eslint-disable-line
      for (let i = 0; i < colors.children.length; i+= 1) {
        TweenMax.to(colors.children[i], 0.3, {y: 0, opacity: 1, delay: (0.025 * i), ease: Power1.ease}); // eslint-disable-line
      }
    })

    hoverCard.addEventListener('mouseleave', () => {
      TweenMax.to(hoverCard, 0.2, {opacity: 0, ease: Power2.ease}); // eslint-disable-line
      TweenMax.to(price, 0.3, {y: 20, delay: 0.15, opacity: 0, ease: Power1.ease}); // eslint-disable-line
      for (let i = 0; i < colors.children.length; i+= 1) {
        TweenMax.to(colors.children[i], 0.3, {y: 20, opacity: 0, ease: Power1.ease}); // eslint-disable-line
      }
    })

    // Show different images on hover of the left or the right side
    hoverCard.addEventListener('mousemove', (e) => {
      if (e.layerX > (hoverCard.offsetWidth / 2)) {
        TweenMax.to(imgLeft, 0.3, {opacity: 1});
        TweenMax.to(imgRight, 0.3, {opacity: 0});
        TweenMax.to(price, 0.3, {color: '#000'});
      } else {
        TweenMax.to(imgLeft, 0.3, {opacity: 0});
        TweenMax.to(imgRight, 0.3, {opacity: 1});
        TweenMax.to(price, 0.3, {color: '#FFF'});
      }
    })
  }

}

export default HoverCard
