import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'     
function Footer()
{
    return(
        <>
        <div class="container-fluid">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{backgroundColor:'#F5F5F7', color:'black'}}>
    <p class="col-md-4 mb-0 " style={{color: 'black'}}>© 2024 Company, Inc</p>

    <a href="" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><Link to='/' class="nav-link px-2 " style={{color: 'black'}}>Home</Link></li>
      <li class="nav-item"><Link to='/about' class="nav-link px-2 " style={{color: 'black'}}>About</Link></li>
      <li class="nav-item"><Link to='/contact' class="nav-link px-2 " style={{color: 'black'}}>Contact</Link></li>
      <li class="nav-item"><Link to='/register' class="nav-link px-2 " style={{color: 'black'}}>Register</Link></li>
      <li class="nav-item"><Link to='/login' class="nav-link px-2 " style={{color: 'black'}}>Login</Link></li>
    </ul>
  </footer>
</div>
        </>
    )
}
export default Footer