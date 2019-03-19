import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from '../../../helpers/helper-jquery';
// import assets from '../../../assets';

import Rotator from '../../atoms/rotator';
// import Aether from '../../atoms/aether';
import Wave from '../../atoms/waves';

const content = [
  {
    text: 'Terremotos',
    className: 'rotate',
    animation: 'fade',
  },
  {
    text: 'Tsunamis',
    className: 'rotate',
    animation: 'fade',
  },
  {
    text: 'Inundaciones',
    className: 'rotate',
    animation: 'fade',
  },
  {
    text: 'Ciclónes',
    className: 'rotate',
    animation: 'fade',
  },
  {
    text: 'Marejadas',
    className: 'rotate',
    animation: 'fade',
  },
];

class Hero extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    $(this.container).height($(window).height() - $('#Header').height());
  }

  scrollTo() {
    const { goTo } = this.props;
    // const myElement = document.getElementById(goTo);
    // const topPos = myElement.offsetTop;
    // document.getElementById('overlay').scrollTop = topPos;

    $('#MainScroll').animate({
      scrollTop: $('#MainScroll').scrollTop() + ($(goTo).offset().top - $('#MainScroll').offset().top),
    }, 800, 'easeInOutQuart');


    // $('#MainScroll').scrollTo(0, $(`#${goTo}`).offset().top);
  }

  render() {
    return (
      <section className="hero-wrap text-center bg-primary">
        <div ref={(el) => { this.container = el; }} className="container">
          <Wave className="fill" />
          <div className="hero-holder">
            <div className="hero-message text-rotator">
              <h1>
                <Rotator
                  content={content}
                  time={4000}
                  startDelay={200}
                />
              </h1>
              <h2 className="hero-subtitle">RYR Web facilita la comprensión del panorama de riesgo en la región.</h2>
              <div className="buttons-holder mt-30">
                <a href="/" className="btn btn-md rounded btn-white">Ver Atlas de Riesgo</a>
              </div>
              <div className="local-scroll">
                <button onClick={this.scrollTo} type="button" className="scroll-down btn-color">
                  <i className="implanf-expand_more" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Hero.defaultProps = {
  goTo: '',
};

Hero.propTypes = {
  goTo: PropTypes.string,
};

export default Hero;
