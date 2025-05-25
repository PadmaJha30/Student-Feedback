import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
// import Footer from '../Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
function Home()
{
    return(

        <>
        <Header/>
        {/* <div className='container-fluid mb-5 mt-5' style={{backgroundImage:'url("https://www.thomasmarsden.com.au/images/slide-web-social-tiles.jpg")' , width:'100%',height:'500px', position:'relative'}}>
          <div className='row'>
             <h1 style={{fontWeight:'bold', position:'absolute', transform:'translate(-50%,-50%)', top: '50%',left:'85%',marginTop:'50px'}}>Student Feedback</h1>
             <button type="submit" className='btn' style={{width:'300px', position:'absolute', transform:'translate(-50%,-50%)', top: '50%',left:'50%', marginTop:'100px', backgroundColor:'#9B3922'}}>Click Here to Know more</button>
          </div>
        </div> */}
        {/* ============================ */}
        <div className='sec1'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.thomasmarsden.com.au/images/slide-web-social-tiles.jpg" class="d-block w-100" alt="..."/>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.thomasmarsden.com.au/images/slide-web-social-tiles.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.thomasmarsden.com.au/images/slide-web-social-tiles.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        {/* section 2 */}
        <img src="./Images/img.png" alt=""/> 
        <div className='container-fluid mb-5 mt-5'>
          <div className='row'>
            
             
             <div className='col-lg-6 mt-5' style={{justifyContent:'center',textAlign:'center'}}>
             <h1 className=' mb-3'>Student Feedback</h1>
             Student feedback is a crucial part of the education system, providing insight into teaching effectiveness, course content relevance, and student satisfaction. When thoughtfully collected and implemented, feedback can bridge gaps between educators and students, enhancing both learning experiences and teaching practices. Here’s a deeper look at its significance, best practices, and challenges.
               

Student Feedback: A Key to Improving Education

Student feedback is an essential part of modern education, offering valuable insights that help educators, institutions, and students themselves. By gathering feedback, schools and universities can adapt teaching methods, update course materials, and foster a better learning environment. Here’s a breakdown of why student feedback matters, how to collect it effectively, and the challenges that may arise.
             </div>
             <div className='col-lg-6' >
                <img src="https://www.pngplay.com/wp-content/uploads/9/Internet-Website-No-Background.png" alt="" className='img-fluid mt-5' style={{width:'500px', height:'500px'}}/>
             </div>
             <button type="submit" className='btn btn-danger' style={{backgroundColor:'#9B3922'}}></button>
          </div>
        </div>

        <div className='container mb-5 mt-5'>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                           <img src="https://cdni.iconscout.com/illustration/premium/thumb/student-review-illustration-download-in-svg-png-gif-file-formats--feedback-rating-course-school-and-education-pack-illustrations-8400953.png?f=webp" alt="" style={{width:'200px', height:'200px'}}/> 
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                           <img src="https://img.freepik.com/vetores-gratis/conceito-de-feedback-plano_23-2148965728.jpg" alt="" style={{width:'200px', height:'200px'}}/> 
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                           <img src="https://img.freepik.com/free-vector/organic-flat-feedback-concept_23-2148957870.jpg" alt="" style={{width:'200px', height:'200px'}}/> 
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                           <img src="https://img.freepik.com/free-vector/feedback-loop-concept-illustration_114360-17629.jpg" alt="" style={{width:'200px', height:'200px'}}/> 
                        </div>
                    </div>
                </div>
            </div> 
        </div>
         <Footer/>
        </>
    );
}

export default Home