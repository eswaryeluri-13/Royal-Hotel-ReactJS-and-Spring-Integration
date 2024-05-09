import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h1 className="section-title d-flex flex-column align-items-center"><span className="hotel-color">Guest Testimonials</span></h1>
        <div className="row mt -4 mb-4">
          <div className="col-lg-4">
            <div className="card testimonial-card mt-4">
              <div className="card-body d-flex flex-column align-items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRkv1xjC9ShFTT6jg2sM0Ugy_N7IYnms8HO_L21up9BMc0JeExwdW-J8dD-BU8PhHSI3K" alt="User Avatar" className="avatar" style={{ width: '300px', height: '300px', borderRadius: '0%' }}/>
              <br></br>
                <h5 className="card-title">Bill Gates</h5>
                <p className="card-text">"Absolutely amazing experience! The staff was friendly, the rooms were clean, and the view from our balcony was breathtaking. We will definitely be returning."</p>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>xx
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card testimonial-card mt-4">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://i0.wp.com/www.grownxtdigital.in/wp-content/uploads/2024/03/Virat-kohli-New-Hair-Style-look-IPL-2024-e1710860199236.webp?fit=381%2C380&ssl=1" alt="User Avatar" className="avatar" style={{ width: '300px', height: '300px', borderRadius: '0%' }}/>
              <br></br>
                <h5 className="card-title">Virat Kohli</h5>
                <p className="card-text">"We had a wonderful time at the hotel. The facilities were top-notch, and the staff went above and beyond to ensure our comfort. Highly recommend!"</p>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card testimonial-card mt-4">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://anniversaire-celebrite.com/upload/250x333/akira-toriyama-250.jpg" alt="User Avatar" className="avatar" style={{ width: '250px', height: '300px', borderRadius: '0%' }}/>
              <br></br>                
              <h5 className="card-title">Akira Toriyama</h5>
                <p className="card-text">"From check-in to check-out, everything was seamless. The hotel exceeded our expectations in every way. We can't wait to come back!"</p>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
  );
};

export default Testimonials;
