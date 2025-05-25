 import React from "react";
import Header from "../Layout/Header";
class Register extends React.Component
{
    state={
      fname:'', lname:'', email:'', pass:'', num:'',address:'',val:''
    }  
    data=(e)=>
    {     
          const{name,value}=e.target
          this.setState({[name]:value})
    }
    handle=(event)=>{
     event.preventDefault()
     const{fname,lname,pass,email,num,address}=this.state
     
    const val="Firstname :"+fname+ ", Lastname :"+ lname + "Password" +pass+ ",Email  "+ email+ ", number : "+ num +", address : " +address;
     
    this.setState({val},()=>{
        alert(this.state.val);
     });
    }

 
    render(){

    return(
        <>
        <Header/>
       
        <div className="container-fluid mt-5 mb-5" style={{backgroundColor:''}}>
        <img src="https://www.optiona.co.uk/wp-content/uploads/registration-banner-1024x360.png" alt="" style={{width:'100%'}}/>
            <div className="row" style={{justifyContent:'center'}}>
                <div className="col-lg-6 mt-2 mb-2 text-center">
                <h1 className="mt-5" style={{backgroundColor:'#F5F5F7', marginTop:'50px',fontFamily:'-moz-initial'}}>Registration-Form</h1>
                <img src="https://cdn.pixabay.com/animation/2023/03/22/02/42/02-42-16-86_512.gif" alt="" style={{height:'70px', width:'300px'}} />
                 <form onSubmit={this.handle}>      
                 <div className="card regcard"  style={{backgroundColor:'#E1F1E7', width:'600px', height:'350px' }}>
                    <div className="card-body mt-3 mb-3">
                        <div className="row">
                              
                             <div className="col-lg-6 mt-3 mb-3">
    
                            <input type="text" name="fname" className="form-control" placeholder="First Name" value={this.state.fname} onChange={this.data}/>
                            </div>
                            <div className="col-lg-6 mt-3 mb-3">
                            <input type="text" name="lname"  className="form-control" placeholder="Last Name" value={this.state.lname} onChange={this.data}/>
                            </div>
                       </div>
                       {/* row 2 */}
                        <div className="row">
                              
                             <div className="col-lg-6 mt-3 mb-3">
    
                            <input type="password" name="pass" className="form-control" placeholder="Password" value={this.state.pass} onChange={this.data}/>
                            </div>
                            <div className="col-lg-6 mt-3 mb-3">
                            <input type="email" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.data}/>
                            </div>
                       </div>
                       {/* ṛow 3 */}
                        <div className="row">
                              
                             <div className="col-lg-6 mt-3 mb-3">
    
                            <input type="number" name="num" className="form-control" placeholder="Ph no." value={this.state.num} onChange={this.data}/>
                            </div>
                            <div className="col-lg-6 mt-3 mb-3">
                            <input type="text" name="address" value={this.state.address} className="form-control" placeholder="Address" onChange={this.data}/>
                            </div>
                       </div>
                       <div className="row">
                       <div className="col-lg-12 mt-3 mb-3">
                            <input type="submit" name="name" value="Submit" className="form-control btn btn-primary rounded-pill"/>
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
export default Register