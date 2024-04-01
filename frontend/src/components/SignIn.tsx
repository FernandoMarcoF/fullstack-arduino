import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SignIn = () => {
  return (
    <section className="sign-in-page">
      <div id="container-inside">
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
      </div>
      <div className="container p-0">
        <div className="row no-gutters height-self-center">
          <div className="col-sm-12 align-self-center bg-primary rounded">
            <div className="row m-0">
              <div className="col-md-5 bg-white sign-in-page-data">
                <div className="sign-in-from">
                  <h1 className="mb-0 text-center">Sign in</h1>
                  <p className="text-center text-dark">Enter your email address and password to access admin panel.</p>
                  <form className="mt-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <a href="#" className="float-right">Forgot password?</a>
                      <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="d-inline-block w-100">
                      <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                      </div>
                    </div>
                    <div className="sign-info text-center">
                      <Link to="/panel" className="btn btn-primary d-block w-100 mb-2">
                        Sign in
                      </Link>
                      <span className="text-dark dark-color d-inline-block line-height-2">Don't have an account? <a href="#">Sign up</a></span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-7 text-center sign-in-page-image">
                <div className="sign-in-detail text-white">
                  <a className="sign-in-logo mb-5" href="#"><img src="/src/assets/images/logo-full.png" className="img-fluid" alt="logo" /></a>
                  <Slider
                    autoplay={true}
                    infinite={true}
                    dots={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                  >
                    <div className="item">
                      <img src="/src/assets/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                      <h4 className="mb-1 text-white">Find new friends</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div className="item">
                      <img src="/src/assets/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                      <h4 className="mb-1 text-white">Connect with the world</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div className="item">
                      <img src="/src/assets/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                      <h4 className="mb-1 text-white">Create new events</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
