import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const getdata = useSelector((state) => state.cartReducer.carts);
  // console.log(getdata);
  
  return (
    <>
    
    <nav className="navbar navbar-expand-sm navbar-dark navbarstyle shadow-lg">
  <div className="container-fluid">
    <a className="navbar-brand text-black text-bold" href="javascript:void(0)"> Subendra Shop </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse cartbtn navbar-collapse" id="mynavbar">
      <Link to="/cart">
    <button type="button" className="btn btn-primary">
        Cart <span className="badge bg-danger">{getdata.length}</span>
</button></Link>
    </div>
  </div>
</nav>

    
    
    </>
  )
}

export default Navbar