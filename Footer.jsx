import React from 'react'

function Footer() {
  return (
  <div>
  {/* footer section start */}
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="input_btn_main">
        <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email" />
        <div className="subscribe_bt"><a href="#">Subscribe</a></div>
      </div>
      <div className="location_main">
        <div className="call_text"><img src="images/call-icon.png" /></div>
        <div className="call_text"><a href="#">Call +01 1234567890</a></div>
        <div className="call_text"><img src="images/mail-icon.png" /></div>
        <div className="call_text"><a href="#">demo@gmail.com</a></div>
      </div>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src="images/fb-icon.png" /></a></li>
          <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
          <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
          <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  {/* footer section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
    </div>
  </div>
  {/* copyright section end */}
</div>


  )
}

export default Footer