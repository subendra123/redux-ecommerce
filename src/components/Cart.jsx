import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart = () => {
    const getdata = useSelector((state) => state.cartReducer.carts);
  console.log(getdata);


  return (
   <>
 

 <section class="h-100 h-custom" style={{backgroundColor: "gray"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius: 15}}>
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0">Shopping Cart</h1>
                    <h6 class="mb-0 text-muted">3 items</h6>
                  </div>
                  <hr class="my-4"/>
  

{
    getdata.map((item) => {
        return(
            <>


                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={item.imgdata}
                        class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">Food</h6>
                      <h6 class="mb-0">{item.rname}</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">{item.price}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div> 

                  <hr class="my-4"/>

                
                 
               





            </>
        )
    })
}

<Link to="/">
                  <div class="pt-5">
                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div></Link>
                </div>
              </div>
              <div class="col-lg-4 bg-body-tertiary">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items {getdata.length}</h5>
                    <h5>€ 132.00</h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Shipping</h5>

                  <div class="mb-4 pb-2">
                    <select data-mdb-select-init>
                      <option value="1">Standard-Delivery- €5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <h5 class="text-uppercase mb-3">Give code</h5>

                  <div class="mb-5">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5>€ 137.00</h5>
                  </div>

                  <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </>

    
  )
}

export default Cart