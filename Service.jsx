import React from 'react'

function Service() {
  return (
 <div >
  <div className="services_section layout_padding ">
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
</div>


  )
}

export default Service