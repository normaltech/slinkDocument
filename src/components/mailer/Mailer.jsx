import "./mailer.css"
import emailjs from "emailjs-com";
import $ from "jquery";


export default function Mailer() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_62rrrru', 'template_n19exkj', e.target, 'user_z2Ld48CfkLWCe5PiLdeSt')
      .then((result) => {
        // console.log(result.text);
        alert("message successfully sent");
        
      }, (error) => {
        alert("please send again");
      });
  }

  return (
    <div className="mailerContainer">
    <div id="contactusTopbarPos"></div>
      <div className="mailerTitle">
        <div className="mailerTitleText">Connect with</div>
      </div>
      <div className="mailerForm">
        <form className="contact-form" onSubmit={sendEmail}>
          <label><div className="contactItem">Name</div></label>
          <input type="text" className="textInput" name="user_name" placeholder="Your name" required />
          <label><div className="contactItem">Email</div></label>
          <input type="email" className="textInput" name="user_email" placeholder="Your address" required />
          <label><div className="contactItem">Message</div></label>
          <textarea name="message" className="messageInput" placeholder="Message" required max-rows="-1" resize="none" />
          <br></br>
          <input className="form-control-btn" type="submit" value="Send" required />
        </form>
      </div>
    </div>
  );
}


