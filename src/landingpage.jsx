import vendoronphone from "./desktop/vendor-on-phone.jpg";
import vendoropenlate from "./desktop/vendor-open-late.jpg";
import vendorshowphone from "./desktop/vendor-show-phone.jpg";
import delivery from "./desktop/delivery-to-vendor.jpg";
import relax from "./desktop/relax-at-home.jpg";
import search from "./desktop/search-and-go.jpg";
import sokobot from "./desktop/soko-bot.jpg";
import Slider from "react-slick";
import "./styles.css";
import "./landingpage.css";
import './mobile.css';

export default function LandingPage() {
  const setting = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    edgeFriction:0,
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="nav">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="55"
            viewBox="0 0 159.15 60"
          >
            <g id="logo" transform="translate(-11.699 -16.499)">
              <g
                id="Group_836"
                data-name="Group 836"
                transform="translate(11.699 16.499)"
              >
                <path
                  id="Path_3034"
                  data-name="Path 3034"
                  d="M100.874,63.651a8.193,8.193,0,0,0-.054.884,10.5,10.5,0,0,0,5.348,8.987c3.278,2,7.874,2.976,14.052,2.976,13.963,0,19.266-7.129,19.659-13.552a16.638,16.638,0,0,0,5.852,1,16.968,16.968,0,0,0,6.132-1.058,9.846,9.846,0,0,0,4.067.775h7.1a8.261,8.261,0,0,0,4.855-1.363,6.96,6.96,0,0,0,2.965-5.837,7.256,7.256,0,0,0-2.43-5.513V43.546c0-5.448-2.322-14.587-17.874-14.587-4.638,0-8.2.535-10.872,1.632a6.685,6.685,0,0,0-4.574-1.725,14.759,14.759,0,0,0-2.541.321c-.46.082-1.3.233-1.628.261-1.663,0-3.2-.114-4.818-.231-1.75-.126-3.559-.256-5.607-.256-5.587,0-10.261,1.5-13.681,4.176a8.2,8.2,0,0,0-.612-1.118,9.327,9.327,0,0,0,1.659-5.281c0-5.646-5.185-10.239-11.559-10.239S84.755,21.092,84.755,26.738a9.136,9.136,0,0,0,.426,2.746c-.346-.032-.705-.049-1.079-.049H80.5a8.821,8.821,0,0,0-4.515,1.082,11.3,11.3,0,0,0-5.234-1.082H65.475a9.7,9.7,0,0,0-4.443.907,9.441,9.441,0,0,0-3.189-.832,7.048,7.048,0,0,0,.04-.745c0-1.357-.855-5.964-2.151-7.99a8.753,8.753,0,0,0-7.237-3.647H21.087a8.752,8.752,0,0,0-7.239,3.649c-1.3,2.026-2.15,6.631-2.15,7.988a8.377,8.377,0,0,0,8.645,8.071,8.271,8.271,0,0,0,3.292-.66V50.5a7.029,7.029,0,0,0-2.526,5.628A6.922,6.922,0,0,0,24,61.951a9.445,9.445,0,0,0,5.6,1.519H39.985a9.446,9.446,0,0,0,5.6-1.519,6.835,6.835,0,0,0,2.793-4.564,17.108,17.108,0,0,0,1.3,2.26c2.963,4.3,6.864,4.3,9.195,4.3A11.468,11.468,0,0,0,66.3,61.665c1.7,1.349,4.126,2.281,7.766,2.281,6.259,0,9.016-3.049,10.595-6.086a7.841,7.841,0,0,0,7.777,5.79Z"
                  transform="translate(-11.699 -16.499)"
                  fill="#1c1c53"
                />
                <g
                  id="Group_835"
                  data-name="Group 835"
                  transform="translate(5.437 5.437)"
                >
                  <path
                    id="Path_3035"
                    data-name="Path 3035"
                    d="M210.546,39.453c-3.381,0-6.121-2.15-6.121-4.8s2.741-4.8,6.121-4.8,6.121,2.15,6.121,4.8-2.741,4.8-6.121,4.8"
                    transform="translate(-131.369 -29.849)"
                    fill="#fecf0a"
                  />
                  <g
                    id="Group_834"
                    data-name="Group 834"
                    transform="translate(0 0.631)"
                  >
                    <path
                      id="Path_3036"
                      data-name="Path 3036"
                      d="M205.247,67.531c0-2.71-2.079-1.562-2.079-3.789,0-1.258.724-2.164,2.611-2.358,2.372-.242,6.728-1.4,7.7-1.4,1.452,0,2.42.968,2.42,4.453V78.373c0,2.565,1.839,1.791,1.839,3.727,0,.823-.871,1.888-2.517,1.888h-9.292c-1.645,0-2.517-1.065-2.517-1.888,0-1.935,1.839-1.161,1.839-3.727Z"
                      transform="translate(-130.624 -48.34)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3037"
                      data-name="Path 3037"
                      d="M120.944,61.613c2.478,0,3.534.572,3.534,1.858,0,1.668-1.136,1.43-1.136,2.335,0,3.145,2.954,11.1,3.526,12.867,1.382-2.955,3.24-8.578,3.24-11.723,0-2-1.8-1.716-1.8-3.574,0-1.381.762-1.763,2.383-1.763h3.6c1.906,0,2.677.667,2.677,1.858,0,1.763-.8,1-1.752,3.955-1,3.05-3.125,9.636-3.887,11.59-1.477,3.717-2.129,6.233-7.073,6.233-5.531,0-5.482-2.4-7.529-7.1.033.075-.067.149-.1.223-2.215,4.935-3.159,6.878-7.573,6.878-4.193,0-5.146-.048-9.721-15.44-1.859-6.242-2.955-4.575-2.955-6.29,0-1.429,1.43-1.906,3.336-1.906h6.739c2.192,0,3.344.477,3.344,1.858,0,1.954-1.136,1.239-1.136,2.574a44.245,44.245,0,0,0,3.526,12.629,35.216,35.216,0,0,0,2.212-7.641c1.363-7.318-1.4-5.559-1.4-7.608,0-1.239.428-1.811,2.668-1.811Z"
                      transform="translate(-67.329 -49.307)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3038"
                      data-name="Path 3038"
                      d="M257.7,60.31c3.717,0,6.737.487,10.5.487,1.008,0,3.487-.582,4.092-.582,3.042,0-.441,5.67-3.394,5.67a10.607,10.607,0,0,1,2.192,6.784,10.723,10.723,0,0,1-5.242,9.467v.105c2.906.526,5.813,2.156,5.813,5.837,0,4.734-4.384,8.894-14.248,8.894-11.294,0-13.963-3.635-13.963-6.527,0-2.787,2.822-3.572,6.73-3.572,2.287,0,3.566.286,3.566,1.258,0,.631-.1.819-.1,1.292,0,1,1.239,2.2,3.622,2.2,3.241,0,4.86-2.28,4.86-4.067,0-1.683-1.286-2.577-2.525-3.209a29.678,29.678,0,0,1-3.717.369c-6.624,0-12.723-3.839-12.723-11.886,0-9.309,7.148-12.517,14.535-12.517m-.572,20.2c2.049,0,3-3.261,3-8.1s-.953-8.1-3-8.1-3,3.261-3,8.1.953,8.1,3,8.1"
                      transform="translate(-154.333 -48.478)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3039"
                      data-name="Path 3039"
                      d="M345.211,77.98c0,2.954,2.43,2.387,2.43,4.531,0,1.287-.858,1.763-2.383,1.763h-7.1c-2.145,0-2.717-.528-3.1-2.672-1.525,2.335-4.527,2.954-7.1,2.954-6.052,0-8.816-3.908-8.816-7.53,0-4.956,4.194-8.2,15.345-8.2-.1-3.717-.744-4.575-2.7-4.575-2.716,0-3.859,2.836-6.691,2.836-3.188,0-4-.454-4-2.074,0-2.764,3.574-4.575,11.676-4.575,6.576,0,12.437,1.621,12.437,9.15ZM331.725,79.79c2.288,0,3-3.335,3-7.434-2.955,0-5.1,1.668-5.1,4.718,0,1.667.858,2.716,2.1,2.716"
                      transform="translate(-199.366 -48.614)"
                      fill="#fff"
                    />
                    <path
                      id="Path_3040"
                      data-name="Path 3040"
                      d="M56.407,31.4a3.491,3.491,0,0,1,2.665,1.151A18.3,18.3,0,0,1,60.359,37.6c0,1.62-1.779,2.635-3.208,2.635-2.812,0-2.581-3.184-7.013-3.184-1.287,0-1.715.429-1.715,2.049V61.05c0,2.574,2.526,1.43,2.526,3.908,0,1.191-.619,1.906-3.05,1.906H37.51c-2.431,0-3.05-.715-3.05-1.906,0-2.478,2.526-1.335,2.526-3.908V39.1c0-1.62-.428-2.049-1.715-2.049-4.432,0-4.2,3.184-7.013,3.184-1.43,0-3.208-1.015-3.208-2.635a18.27,18.27,0,0,1,1.287-5.047A3.491,3.491,0,0,1,29,31.4Z"
                      transform="translate(-25.049 -31.398)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
              <g
                id="Group_840"
                data-name="Group 840"
                transform="translate(21.964 67.576)"
              >
                <g
                  id="Group_837"
                  data-name="Group 837"
                  transform="translate(0 0.896)"
                >
                  <path
                    id="Path_3041"
                    data-name="Path 3041"
                    d="M38.4,148.55a1.405,1.405,0,0,0,1.6,1.312c.721,0,1.173-.28,1.173-.731s-.4-.559-.99-.678l-1.269-.226a1.948,1.948,0,0,1-1.839-1.958c0-1.334,1.043-2.162,2.689-2.162,1.84,0,2.84.915,2.872,2.421l-1.506.043a1.214,1.214,0,0,0-1.377-1.184c-.689,0-1.076.28-1.076.742,0,.387.3.527.8.624l1.269.226c1.388.248,2.022.936,2.022,2.044,0,1.4-1.216,2.119-2.765,2.119-1.807,0-3.1-.893-3.1-2.539Z"
                    transform="translate(-36.903 -144.107)"
                    fill="#1c1c53"
                  />
                  <path
                    id="Path_3042"
                    data-name="Path 3042"
                    d="M61.484,151.142a3.518,3.518,0,1,1,3.485-3.517A3.379,3.379,0,0,1,61.484,151.142Zm0-5.6c-1.1,0-1.8.829-1.8,2.087s.7,2.086,1.8,2.086a2.109,2.109,0,0,0,0-4.174Z"
                    transform="translate(-49.413 -144.107)"
                    fill="#1c1c53"
                  />
                  <path
                    id="Path_3043"
                    data-name="Path 3043"
                    d="M86.682,151.2l-2.076-2.808-.635.678v2.13H82.336v-6.777h1.635V147.3l2.614-2.872h1.882l-2.678,2.9,2.851,3.873Z"
                    transform="translate(-63.832 -144.295)"
                    fill="#1c1c53"
                  />
                  <path
                    id="Path_3044"
                    data-name="Path 3044"
                    d="M105.992,151.142a3.518,3.518,0,1,1,3.485-3.517A3.379,3.379,0,0,1,105.992,151.142Zm0-5.6c-1.1,0-1.8.829-1.8,2.087s.7,2.086,1.8,2.086a2.109,2.109,0,0,0,0-4.174Z"
                    transform="translate(-75.794 -144.107)"
                    fill="#1c1c53"
                  />
                  <path
                    id="Path_3045"
                    data-name="Path 3045"
                    d="M140.659,144.424h1.753l-2.614,4.185V151.2h-1.581v-2.592l-2.6-4.185h1.808l1.656,2.614Z"
                    transform="translate(-95.411 -144.295)"
                    fill="#1c1c53"
                  />
                  <path
                    id="Path_3046"
                    data-name="Path 3046"
                    d="M164.245,151.2h-5.228v-6.777h5.131v1.344H160.62V147.1h2.743v1.323H160.62v1.431h3.625Z"
                    transform="translate(-109.282 -144.295)"
                    fill="#1c1c53"
                  />
                  <path
                    id="Path_3047"
                    data-name="Path 3047"
                    d="M180.918,151.2v-5.433h-2.356v-1.344h6.369v1.344h-2.389V151.2Z"
                    transform="translate(-120.867 -144.295)"
                    fill="#1c1c53"
                  />
                  <path
                    id="Path_3048"
                    data-name="Path 3048"
                    d="M201.332,148.533v-4.109h1.625V148.3c0,1.087.387,1.656,1.377,1.656s1.388-.57,1.388-1.645v-3.884h1.624v4.109c0,1.979-1.312,2.8-3.012,2.8S201.332,150.513,201.332,148.533Z"
                    transform="translate(-134.363 -144.295)"
                    fill="#1c1c53"
                  />
                </g>
                <g
                  id="Group_839"
                  data-name="Group 839"
                  transform="translate(73.36 0)"
                >
                  <g
                    id="Group_838"
                    data-name="Group 838"
                    transform="translate(0.461 0.347)"
                  >
                    <path
                      id="Path_3049"
                      data-name="Path 3049"
                      d="M218.8,143.74a.561.561,0,0,1-.04-.221.183.183,0,0,0-.2-.193h-.3v.413h-.1v-.979h.37c.247,0,.365.114.365.283a.235.235,0,0,1-.225.242.216.216,0,0,1,.191.216c.013.143.017.2.05.238Zm-.272-.494c.182,0,.261-.072.261-.2s-.079-.2-.261-.2h-.277v.4Z"
                      transform="translate(-218.158 -142.761)"
                      fill="#1c1c53"
                    />
                  </g>
                  <path
                    id="Path_3050"
                    data-name="Path 3050"
                    d="M217.862,143.582a.837.837,0,1,1,.837-.837A.838.838,0,0,1,217.862,143.582Zm0-1.554a.717.717,0,1,0,.717.717A.718.718,0,0,0,217.862,142.028Z"
                    transform="translate(-217.025 -141.908)"
                    fill="#1c1c53"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <Slider {...setting}>
        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${vendoronphone})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "9/16",
            }}
          >
            <div className="main">
              <div className="container">
                <div className="details">
                  <h1>Introducing a whole new Soko Yetu experience </h1>
                  <hr />
                  <h2>Hot Deals!</h2>
                  <p className="para-2">Get Deals everyday</p>
                </div>
                <button className="button-container">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.517"
                    height="13"
                    viewBox="0 0 17.517 13"
                  >
                    <path
                      id="right-arrow"
                      d="M11.167,13.5a1.73,1.73,0,0,1-.663-.132,1.708,1.708,0,0,1-1.061-1.581V10.314a.684.684,0,1,1,1.369,0v1.472a.334.334,0,0,0,.215.316.34.34,0,0,0,.383-.073l4.539-4.545a.688.688,0,0,0,0-.971L11.41,1.969a.34.34,0,0,0-.383-.073.334.334,0,0,0-.215.316V6.349A1.37,1.37,0,0,1,9.444,7.718H.684a.684.684,0,0,1,0-1.369H9.444V2.212A1.72,1.72,0,0,1,12.379,1l4.539,4.544a2.059,2.059,0,0,1,0,2.906L12.379,13A1.71,1.71,0,0,1,11.167,13.5Zm0,0"
                      transform="translate(0 -0.499)"
                      fill="#1c1c53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${vendoropenlate})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "9/16",
            }}
          >
            <div className="main">
              <div className="container">
                <div className="details">
                  <h1>Introducing a whole new Soko Yetu experience </h1>
                  <hr />
                  <h2>Open till late!</h2>
                  <p className="para-2">
                    Enjoy extended ordering hours from 9am to 9pm everyday{" "}
                  </p>
                </div>
                <button className="button-container">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.517"
                    height="13"
                    viewBox="0 0 17.517 13"
                  >
                    <path
                      id="right-arrow"
                      d="M11.167,13.5a1.73,1.73,0,0,1-.663-.132,1.708,1.708,0,0,1-1.061-1.581V10.314a.684.684,0,1,1,1.369,0v1.472a.334.334,0,0,0,.215.316.34.34,0,0,0,.383-.073l4.539-4.545a.688.688,0,0,0,0-.971L11.41,1.969a.34.34,0,0,0-.383-.073.334.334,0,0,0-.215.316V6.349A1.37,1.37,0,0,1,9.444,7.718H.684a.684.684,0,0,1,0-1.369H9.444V2.212A1.72,1.72,0,0,1,12.379,1l4.539,4.544a2.059,2.059,0,0,1,0,2.906L12.379,13A1.71,1.71,0,0,1,11.167,13.5Zm0,0"
                      transform="translate(0 -0.499)"
                      fill="#1c1c53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              listStyleType: "none",
              backgroundImage: `url(${vendorshowphone})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "9/16",
            }}
          >
            <div className="main">
              <div className="container">
                <div className="details">
                  <h1>Introducing a whole new Soko Yetu experience </h1>
                  <hr />
                  <h2>Buy now, pay later!</h2>
                  <p className="para-3">
                    Order your goods on credit via Sokoloan* <br />{" "}
                    <small>*T&C apply</small>
                  </p>
                </div>
                <button className="button-container">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.517"
                    height="13"
                    viewBox="0 0 17.517 13"
                  >
                    <path
                      id="right-arrow"
                      d="M11.167,13.5a1.73,1.73,0,0,1-.663-.132,1.708,1.708,0,0,1-1.061-1.581V10.314a.684.684,0,1,1,1.369,0v1.472a.334.334,0,0,0,.215.316.34.34,0,0,0,.383-.073l4.539-4.545a.688.688,0,0,0,0-.971L11.41,1.969a.34.34,0,0,0-.383-.073.334.334,0,0,0-.215.316V6.349A1.37,1.37,0,0,1,9.444,7.718H.684a.684.684,0,0,1,0-1.369H9.444V2.212A1.72,1.72,0,0,1,12.379,1l4.539,4.544a2.059,2.059,0,0,1,0,2.906L12.379,13A1.71,1.71,0,0,1,11.167,13.5Zm0,0"
                      transform="translate(0 -0.499)"
                      fill="#1c1c53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${delivery})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "9/16",
            }}
          >
            <div className="main">
              <div className="container">
                <div className="details">
                  <h1>Introducing a whole new Soko Yetu experience </h1>
                  <hr />
                  <h2>Easily order again!</h2>
                  <p className="para-2">
                    Regular items you buy are always available on your home page
                  </p>
                </div>
                <button className="button-container">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.517"
                    height="13"
                    viewBox="0 0 17.517 13"
                  >
                    <path
                      id="right-arrow"
                      d="M11.167,13.5a1.73,1.73,0,0,1-.663-.132,1.708,1.708,0,0,1-1.061-1.581V10.314a.684.684,0,1,1,1.369,0v1.472a.334.334,0,0,0,.215.316.34.34,0,0,0,.383-.073l4.539-4.545a.688.688,0,0,0,0-.971L11.41,1.969a.34.34,0,0,0-.383-.073.334.334,0,0,0-.215.316V6.349A1.37,1.37,0,0,1,9.444,7.718H.684a.684.684,0,0,1,0-1.369H9.444V2.212A1.72,1.72,0,0,1,12.379,1l4.539,4.544a2.059,2.059,0,0,1,0,2.906L12.379,13A1.71,1.71,0,0,1,11.167,13.5Zm0,0"
                      transform="translate(0 -0.499)"
                      fill="#1c1c53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${relax})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "9/16",
            }}
          >
            <div className="main">
              <div className="container">
                <div className="details">
                  <h1>Introducing a whole new Soko Yetu experience </h1>
                  <hr />
                  <h2>Relax @ Home!</h2>
                  <p className="para-2">
                    Best price guaranteed for bulk home deliveries
                  </p>
                </div>
                <button className="button-container">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.517"
                    height="13"
                    viewBox="0 0 17.517 13"
                  >
                    <path
                      id="right-arrow"
                      d="M11.167,13.5a1.73,1.73,0,0,1-.663-.132,1.708,1.708,0,0,1-1.061-1.581V10.314a.684.684,0,1,1,1.369,0v1.472a.334.334,0,0,0,.215.316.34.34,0,0,0,.383-.073l4.539-4.545a.688.688,0,0,0,0-.971L11.41,1.969a.34.34,0,0,0-.383-.073.334.334,0,0,0-.215.316V6.349A1.37,1.37,0,0,1,9.444,7.718H.684a.684.684,0,0,1,0-1.369H9.444V2.212A1.72,1.72,0,0,1,12.379,1l4.539,4.544a2.059,2.059,0,0,1,0,2.906L12.379,13A1.71,1.71,0,0,1,11.167,13.5Zm0,0"
                      transform="translate(0 -0.499)"
                      fill="#1c1c53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${search})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "9/16",
            }}
          >
            <div className="main">
              <div className="container">
                <div className="details">
                  <h1>Introducing a whole new Soko Yetu experience </h1>
                  <hr />
                  <h2>Search and go!</h2>
                  <p className="para-2">
                    Easily navigate and search your favorite products
                  </p>
                </div>
                <button className="button-container">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.517"
                    height="13"
                    viewBox="0 0 17.517 13"
                  >
                    <path
                      id="right-arrow"
                      d="M11.167,13.5a1.73,1.73,0,0,1-.663-.132,1.708,1.708,0,0,1-1.061-1.581V10.314a.684.684,0,1,1,1.369,0v1.472a.334.334,0,0,0,.215.316.34.34,0,0,0,.383-.073l4.539-4.545a.688.688,0,0,0,0-.971L11.41,1.969a.34.34,0,0,0-.383-.073.334.334,0,0,0-.215.316V6.349A1.37,1.37,0,0,1,9.444,7.718H.684a.684.684,0,0,1,0-1.369H9.444V2.212A1.72,1.72,0,0,1,12.379,1l4.539,4.544a2.059,2.059,0,0,1,0,2.906L12.379,13A1.71,1.71,0,0,1,11.167,13.5Zm0,0"
                      transform="translate(0 -0.499)"
                      fill="#1c1c53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${sokobot})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              aspectRatio: "9/16",
            }}
          >
            <div className="main">
              <div className="container">
                <div className="details">
                  <h1>Introducing a whole new Soko Yetu experience </h1>
                  <hr />
                  <h2>Communication made easy</h2>
                  <p className="para-2">
                    Order, borrow and engage with us via WhatsApp!
                  </p>
                </div>
                <button className="button-container">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="18"
                    viewBox="0 0 17.517 13"
                  >
                    <path
                      id="right-arrow"
                      d="M11.167,13.5a1.73,1.73,0,0,1-.663-.132,1.708,1.708,0,0,1-1.061-1.581V10.314a.684.684,0,1,1,1.369,0v1.472a.334.334,0,0,0,.215.316.34.34,0,0,0,.383-.073l4.539-4.545a.688.688,0,0,0,0-.971L11.41,1.969a.34.34,0,0,0-.383-.073.334.334,0,0,0-.215.316V6.349A1.37,1.37,0,0,1,9.444,7.718H.684a.684.684,0,0,1,0-1.369H9.444V2.212A1.72,1.72,0,0,1,12.379,1l4.539,4.544a2.059,2.059,0,0,1,0,2.906L12.379,13A1.71,1.71,0,0,1,11.167,13.5Zm0,0"
                      transform="translate(0 -0.499)"
                      fill="#1c1c53"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
