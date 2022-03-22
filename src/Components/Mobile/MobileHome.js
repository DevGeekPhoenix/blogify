import { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      blogData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/blog")
      .then((res) => res.json())
      .then((data) => this.setState({ blogData: data }));
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="md:hidden w-[100%] h-screen relative  ">
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
            <div className="">
              <div className="absolute  mt-[-100px] w-screen h-full flex justify-center items-center">
                <Link to={`/blog/${this.state.blogData[0]?._id}`}>
                  <p className="text-center card-shadow text-[1.3rem] text-[#fff] rounded-xl w-[60vw]    backdrop-blur-lg p-5 dana">
                    {this.state.blogData[0]?.title}
                  </p>
                </Link>
              </div>
              <img
                className="w-screen h-screen mt-[-20px] object-cover"
                src={this.state.blogData[0]?.imgurl}
              />
            </div>
            <div className="">
              <div className="absolute mt-[-100px] w-screen h-full flex justify-center items-center">
                <Link to={`/blog/${this.state.blogData[1]?._id}`}>
                  <p className="text-center card-shadow text-[1.3rem] text-[#fff] rounded-xl w-[60vw]  backdrop-blur-lg p-5 dana">
                    {this.state.blogData[1]?.title}
                  </p>
                </Link>
              </div>
              <img
                className="w-screen h-screen mt-[-20px] object-cover"
                src={this.state.blogData[1]?.imgurl}
              />
            </div>
            <div className="">
              <div className="absolute mt-[-100px] w-screen h-full flex justify-center items-center">
                <Link to={`/blog/${this.state.blogData[2]?._id}`}>
                  <p className="text-center card-shadow text-[1.3rem] text-[#fff] rounded-xl w-[60vw]   backdrop-blur-lg p-5 dana">
                    {this.state.blogData[2]?.title}
                  </p>
                </Link>
              </div>
              <img
                className="w-screen h-screen mt-[-20px] object-cover"
                src={this.state.blogData[2]?.imgurl}
              />
            </div>
            <div className="">
              <div className="absolute mt-[-100px] w-screen h-full flex justify-center items-center">
                <Link to={`/blog/${this.state.blogData[3]?._id}`}>
                  <p className="text-center card-shadow text-[1.3rem] text-[#fff] rounded-xl w-[60vw]   backdrop-blur-lg p-5 dana">
                    {this.state.blogData[3]?.title}
                  </p>
                </Link>
              </div>
              <img
                className="w-screen h-screen mt-[-20px] object-cover"
                src={this.state.blogData[3]?.imgurl}
              />
            </div>
          </Slider>
        </section>

        <div className="relative mt-[-220px] ">
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
                  slidesToScroll: 1,
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
            <Link to={`/blog/${this.state.blogData[0]?._id}`}>
              <div className="h-40">
                <div
                  dir="rtl"
                  className="relative h-32 w-[90%] drop-shadow-xl mx-1 "
                >
                  <div className="card-shadow rounded-lg absolute z-10 w-full h-full"></div>
                  <img
                    className="w-full h-full object-cover blur-[1px] rounded-lg "
                    src={this.state.blogData[0]?.imgurl}
                  />
                  <div className="absolute z-20 mt-[-75px] mr-2 ">
                    <img
                      className="w-[45px] h-[45px] object-cover rounded-full"
                      src={this.state.blogData[0]?.creator.imgurl}
                    />
                    <p className="text-[#fff] text-[0.6rem] text-right">
                      نویسنده : {this.state.blogData[0]?.creator.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={`/blog/${this.state.blogData[1]?._id}`}>
              <div className="h-40">
                <div
                  dir="rtl"
                  className="relative h-32 w-[90%] drop-shadow-xl mx-1 "
                >
                  <div className="card-shadow rounded-lg absolute z-10 w-full h-full"></div>
                  <img
                    className="w-full h-full object-cover blur-[1px] rounded-lg "
                    src={this.state.blogData[1]?.imgurl}
                  />
                  <div className="absolute z-20 mt-[-75px] mr-2 ">
                    <img
                      className="w-[45px] h-[45px] object-cover rounded-full"
                      src={this.state.blogData[1]?.creator.imgurl}
                    />
                    <p className="text-[#fff] text-[0.6rem] text-right">
                      نویسنده : {this.state.blogData[1]?.creator.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={`/blog/${this.state.blogData[2]?._id}`}>
              <div className="h-40">
                <div
                  dir="rtl"
                  className="relative h-32 w-[90%] drop-shadow-xl mx-1 "
                >
                  <div className="card-shadow rounded-lg absolute z-10 w-full h-full"></div>
                  <img
                    className="w-full h-full object-cover blur-[1px] rounded-lg "
                    src={this.state.blogData[2]?.imgurl}
                  />
                  <div className="absolute z-20 mt-[-75px] mr-2 ">
                    <img
                      className="w-[45px] h-[45px] object-cover rounded-full"
                      src={this.state.blogData[2]?.creator.imgurl}
                    />
                    <p className="text-[#fff] text-[0.6rem] text-right">
                      نویسنده : {this.state.blogData[2]?.creator.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={`/blog/${this.state.blogData[3]?._id}`}>
              <div className="h-40">
                <div
                  dir="rtl"
                  className="relative h-32 w-[90%] drop-shadow-xl mx-1 "
                >
                  <div className="card-shadow rounded-lg absolute z-10 w-full h-full"></div>
                  <img
                    className="w-full h-full object-cover blur-[1px] rounded-lg "
                    src={this.state.blogData[3]?.imgurl}
                  />
                  <div className="absolute z-20 mt-[-75px] mr-2 ">
                    <img
                      className="w-[45px] h-[45px] object-cover rounded-full"
                      src={this.state.blogData[3]?.creator.imgurl}
                    />
                    <p className="text-[#fff] text-[0.6rem] text-right">
                      نویسنده : {this.state.blogData[3]?.creator.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Slider>
        </div>
        <div className="absolute bottom-[-25.5px] text-center text-[#c2c2c2] text-[8px] w-screen py-1 bg-[#2e3a3f]">
          Front Phoneix توسعه توسط
        </div>
      </div>
    );
  }
}
