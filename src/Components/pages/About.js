import React from "react";
import Header from "../Layout/Header";
function About()
{
    return(
        <>
        <Header/>
        <img src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg" alt="" style={{width:'100%'}}/>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHStKju5N7q5TlV-BoYVPhy4nhN5VqVoSPoQ&s" alt="" style={{width:'100%',borderRadius:'50%' }} className="Img-fluid"/> */}
          <div className="container mt-5 mb-3">
            <h1 className="text-center mb-5">About Us</h1>
            <div className="row">
                
          
            
          <h5> About Us</h5>
<p>Welcome to [Your Website Name], the platform that makes student feedback simple, efficient, and impactful! Our goal is to create an open, honest, and productive environment where students can easily share their opinions and suggestions about their academic experience.</p>

<h5>Our Mission</h5>
<p>We believe that student feedback is key to improving education. By giving students a voice, we aim to help schools, teachers, and institutions better understand what works and what doesn’t. Your feedback helps improve courses, teaching methods, and the overall learning experience.</p>

<h5>How It Works</h5>
<p>Submit Feedback: Share your thoughts about your courses, teachers, and learning environment in a quick and simple way.
Confidential & Secure: Your privacy matters to us. All feedback is collected anonymously to encourage honest and constructive input.
Actionable Insights: We gather the feedback and turn it into valuable insights that help educators make positive changes.</p>
<h5>Why Choose Us?</h5>
<p>Student-Centered: We are committed to putting student voices at the center of educational improvements.
Fast & Easy: Providing feedback takes just a few minutes, and your input can make a big difference.
Confidentiality First: We take privacy seriously, ensuring that your feedback is anonymous and secure.
At [Your Website Name], we believe that every student’s voice matters. Join us in shaping the future of education by sharing your thoughts today!</p>

<p>This content highlights the purpose and value of the feedback platform while emphasizing user-friendliness and privacy, two key elements for student engagement.</p>
</div>
</div>
{/* information */}
<div className="container mt-5 mb-5">
   <div className="row">
     <div className="col-lg-4">
       <div className="card">
          <div className="card-body">
            <img src="https://t4.ftcdn.net/jpg/01/26/51/07/360_F_126510773_fJ4wgQs6viLUZwbRTF1GnwoBA41hb996.jpg" alt="" style={{width:'300px', height:'200px'}}/>
          </div>
       </div>
     </div>
     <div className="col-lg-4">
       <div className="card">
          <div className="card-body">
          <img src="https://as1.ftcdn.net/v2/jpg/05/13/44/52/1000_F_513445292_SpV1OBXXUa1YHYGnXcwvjEdW6uLxOj0x.jpg" alt="" style={{width:'300px', height:'200px'}}/>
          </div>
       </div>
     </div>
     <div className="col-lg-4">
       <div className="card">
          <div className="card-body">
          <img src="https://img.freepik.com/premium-photo/customer-services-best-excellent-business-rating-experience-positive-review-feedback-satisfaction-survey-concept-hand-businessman-show-happy-smile-face-with-five-star_35148-5316.jpg" alt="" style={{width:'305px', height:'200px'}}/>
          </div>
       </div>
     </div>
   </div>
</div>
        </>
    )
}
export default About