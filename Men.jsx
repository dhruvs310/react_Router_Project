import React from 'react'

function Men() {
  return (
   <div>
  
  {/* services section start */}
  <div className="services_section layout_padding">
    <div className="container">
      <h1 className="services_taital">Services </h1>
      <p className="services_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
      <div className="services_section_2">
        <div className="row">
          <div className="col-md-4">
            <div><img src="images/img-1.png" className="services_img" /></div>
            <div className="btn_main"><a href="#">Rafting</a></div>
          </div>
          <div className="col-md-4">
            <div><img src="images/img-2.png" className="services_img" /></div>
            <div className="btn_main active"><a href="#">Hiking</a></div>
          </div>
          <div className="col-md-4">
            <div><img src="images/img-3.png" className="services_img" /></div>
            <div className="btn_main"><a href="#">Camping</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* services section end */}
  {/* about section start */}
  <div className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="about_taital_main">
            <h1 className="about_taital">About Us</h1>
            <p className="about_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
            <div className="readmore_bt"><a href="#">Read More</a></div>
          </div>
        </div>
        <div className="col-md-6 padding_right_0">
          <div><img src="images/about-img.png" className="about_img" /></div>
        </div>
      </div>
    </div>
  </div>
  {/* about section end */}
  {/* blog section start */}
  <div className="blog_section layout_padding">
    <div className="container">
      <h1 className="blog_taital">See Our  Video</h1>
      <p className="blog_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</p>
      <div className="play_icon_main">
        <div className="play_icon"><a href="#"><img src="images/play-icon.png" /></a></div>
      </div>
    </div>
  </div>
  {/* blog section end */}
  {/* client section start */}
  <div className="client_section layout_padding">
    <div className="container">
      <h1 className="client_taital">Testimonial</h1>
      <div className="client_section_2">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client_main">
                <div className="box_left">
                  <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                </div>
                <div className="box_right">
                  <div className="client_taital_left">
                    <div className="client_img"><img src="images/client-img.png" /></div>
                    <div className="quick_icon"><img src="images/quick-icon.png" /></div>
                  </div>
                  <div className="client_taital_right">
                    <h4 className="client_name">Dame</h4>
                    <p className="customer_text">Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_main">
                <div className="box_left">
                  <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                </div>
                <div className="box_right">
                  <div className="client_taital_left">
                    <div className="client_img"><img src="images/client-img.png" /></div>
                    <div className="quick_icon"><img src="images/quick-icon.png" /></div>
                  </div>
                  <div className="client_taital_right">
                    <h4 className="client_name">Dame</h4>
                    <p className="customer_text">Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_main">
                <div className="box_left">
                  <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                </div>
                <div className="box_right">
                  <div className="client_taital_left">
                    <div className="client_img"><img src="images/client-img.png" /></div>
                    <div className="quick_icon"><img src="images/quick-icon.png" /></div>
                  </div>
                  <div className="client_taital_right">
                    <h4 className="client_name">Dame</h4>
                    <p className="customer_text">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* client section start */}
  {/* choose section start */}
  <div className="choose_section layout_padding">
    <div className="container">
      <h1 className="choose_taital">Why Choose Us</h1>
      <p className="choose_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All </p>
      <div className="read_bt_1"><a href="#">Read More</a></div>
      <div className="newsletter_box">
        <h1 className="let_text">Let Start Talk with Us</h1>
        <div className="getquote_bt"><a href="#">Get A Quote</a></div>
      </div>
    </div>
  </div>
  {/* choose section end */}

</div>


  )
}

export default Men