import React from "react"
import Header from "../Layout/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// function Contact()
class Contact extends React.Component
{
   state={
      fname:'',lname:'',email:'',message:'',val:''
   }
   data=(e)=>{
      const{name,value}=e.target
      this.setState({[name]:value})
   }
   handle=(event)=>
   {
      event.preventDefault()
      const{fname,lname,email,message}=this.state
      const val = "First Name: " + fname + ", Last Name: " + lname + ", Email: " + email + ", Message: " + message;
      
      this.setState({ val }, () => {
         alert(this.state.val);
      });
   
   }
   render(){
    return( 
        <>
        <Header/>
        <img src="https://www.howsnoop.com/wp-content/uploads/2019/06/banner.jpg" alt="" style={{width:'100%'}}/>
          <div className="container"  >
            <div className="row " style={{justifyContent:'center'}}>
                <div className="col-lg-6 text-center mb-3 mt-3" >
                    <h1 style={{fontFamily:'-moz-initial', fontWeight:'bold', marginTop:'50px'}} >Contact-Form</h1>
                    <img src="https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif" alt="" style={{width:'300px',height:'30px'}}/>
                 <form onSubmit={this.handle}>
                  <h3>{this.state.val}</h3>
                 <div className="card"  style={{backgroundColor:'#F5F5F7', width:'600px', height:'340px'}}>
                    <div className="card-body">
                        <div className="row">
                           <div className="col-lg-6  mt-3 mb-3">
                            <input type="text" name="fname" value={this.state.fname} onChange={this.data} placeholder="First name" className="form-control"/>
                           </div>
                           <div className="col-lg-6  mt-3 mb-3">
                            <input type="text" name="lname" value={this.state.lname} onChange={this.data} placeholder="Last name" className="form-control"/>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-12  mt-3 mb-3">
                            <input type="email" name="email" value={this.state.email} onChange={this.data} placeholder="Email@gmail.com" className="form-control"/>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-12  mt-3 mb-3">
                            <textarea type="text" name="message" value={this.state.message} onChange={this.data} placeholder="message" className="form-control"/>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-12  mt-3 mb-3">
                            <button type="submit" name="button" value="Submit" className="form-control btn   rounded-pill contButton" style={{background:'#6A696D',color:'white'}}>Submit</button>
                           </div>
                        </div>
                    </div>
                  </div>
                  </form>
                </div>
            </div>
          </div>
        </>
    )
   }
}

export default Contact