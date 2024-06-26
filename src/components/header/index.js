import React from 'react';
import image from '../../assets/images/Svg/inventory.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="cover bg-light">
        <div className="container px-2">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="mt-5 pt-lg-5 aligns-content-wrap">
                <h1 className="intro-title marker" data-aos="fade-left" data-aos-delay="50">Wallmarts Preffered Inventory Manager </h1>
                <p className="lead fw-normal mt-4" data-aos="fade-up" data-aos-delay="100">Never go out-of-stock and miss out on sales.Effectively manage your inventory.</p>
                <div className="mt-3" data-aos="fade-up" data-aos-delay="200">
                  <a className="btn btn-primary shadow-sm mt-1 me-2"  onClick={() => navigate('login')}>Log In <i className="fas fa-arrow-right ms-1"></i></a>
                  <a className="btn btn-outline-secondary mt-1" data-bigpicture={{ "ytSrc": "aqz-KE-bpKQ" }} onClick={() => navigate('signup')}>Sign Up</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-3 pe-lg-0" data-aos="fade-left" data-aos-delay="100">
              <img className="img-fluid" src={image} alt="hello" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="wave-bg"></div> */}
    </header>
  );
}

export default Header;
