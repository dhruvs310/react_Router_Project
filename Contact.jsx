import React from 'react'

function Contact() {
  return (
 <div>
  {/* contact section start */}
  <div className="contact_section layout_padding">
    <div className="container">
      <h1 className="contact_taital">Request A Call Back</h1>
      <div className="email_text">
        <div className="form-group">
          <input type="text" className="email-bt" placeholder="Name" name="Email" />
        </div>
        <div className="form-group">
          <input type="text" className="email-bt" placeholder="Phone Numbar" name="Email" />
        </div>
        <div className="form-group">
          <input type="text" className="email-bt" placeholder="Email" name="Email" />
        </div>
        <div className="form-group">
          <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
        </div>
        <div className="send_btn"><a href="#">SEND</a></div>
      </div>
    </div>
  </div>
  {/* contact section end */}
</div>


  )
}

export default Contact