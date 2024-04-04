import React from 'react';
import devImage from '../../assets/images/Svg/inventory3.svg';

function WorkWithUs() {
  return (
    <div className="section px-2 px-lg-4" id="about">
      <div className="container">
        <div className='d-flex justify-content-center mt-lg-4'>
          <h1 className='intro-title marker'>

          Effectively Manage Your Inventory
          </h1>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-5 px-3 order-md-last" data-aos="fade-zoom-in" data-aos-delay="50" data-aos-easing="ease-in-back">
            <img className="my-3 img-fluid" src={devImage} alt="development" />
          </div>
          <div className="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
            <div>
              <div class="col-lg-8 mb-4">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">Low Stock Alerts</div>
                </div>
              </div>
              <div class="col-lg-8 mb-4">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">Re-buy and Replenish Estimates</div>
                </div>
              </div>
              <div class="col-lg-8 mb-4">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">Accurate Profit Dashboard</div>
                </div>
              </div>
              <div class="col-lg-8 mb-4">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">Continuous support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
