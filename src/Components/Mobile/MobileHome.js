import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="md:hidden w-[100%] relative  ">
        <section className="    ">
          <Slider
            className=""
            arrows={false}
            infinite={true}
            autoplay={true}
            speed={3000}
            autoplaySpeed={2000}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            <div className="w-screen h-[98.5vh] bg-red-300"></div>
            <div className="w-screen h-[98.5vh] bg-green-300"></div>
            <div className="w-screen h-[98.5vh] bg-blue-300"></div>
            <div className="w-screen h-[98.5vh] bg-gray-300"></div>
            <div className="w-screen h-[98.5vh] bg-indigo-500"></div>
            <div className="w-screen h-[98.5vh] bg-yellow-300"></div>
          </Slider>
        </section>

        <div className="relative mt-[-180px] ">
          <Slider
            arrows={false}
            infinite={true}
            autoplay={true}
            speed={3000}
            autoplaySpeed={2000}
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            centerMode={true}
            pauseOnHover={true}
            responsive={[
              {
                breakpoint: 375,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            <div className="h-40">
              <div className="bg-red-300 h-32 w-[90%] drop-shadow-xl mx-1 rounded-lg">
                <p className="text-10">ضرابی</p>
              </div>
            </div>
            <div className="h-40">
              <div className="bg-green-300 h-32 w-[90%] drop-shadow-xl mx-1 rounded-lg">
                6845
              </div>
            </div>
            <div className="h-40">
              <div className="bg-blue-300 h-32 w-[90%] drop-shadow-xl mx-1 rounded-lg">
                6845
              </div>
            </div>
            <div className="h-40">
              <div className="bg-gray-300 h-32 w-[90%] drop-shadow-xl mx-1 rounded-lg">
                6845
              </div>
            </div>
            <div className="h-40">
              <div className="bg-indigo-500 h-32 w-[90%] drop-shadow-xl mx-1 rounded-lg">
                6845
              </div>
            </div>
            <div className="h-40">
              <div className="bg-yellow-300 h-32 w-[90%] drop-shadow-xl mx-1 rounded-lg">
                6845
              </div>
            </div>
          </Slider>
        </div>
        <div className="absolute bottom-[-25.5px] text-center text-[#c2c2c2] text-[8px] w-screen py-1 bg-[#2e3a3f]">
          Front Phoneix توسعه توسط
        </div>
      </div>
    );
  }
}
