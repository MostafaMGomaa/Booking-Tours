import React from 'react'
import customerService from "./image/aboutImg/customer-service.png"
import loyalCustomer from "./image/aboutImg/loyal-customer.png"
import discount from "./image/aboutImg/discount-photo.png"
import wallet from "./image/aboutImg/wallet.png"
import group from "./image/aboutImg/group.png"
const About = () => {
  return (
    <div className="about" id="about">
    <div className="container">
      <h3 className="special-heading text-center">About Us</h3>
      <div className="content">
        <div className="text">
          <p>We offer a wide range o tours and online booking of flights.</p>
          <p>
            Any of your whims will be fulfille. Whatever it's a party or
            relaxing getaway, deserts or
          </p>
          <p className="mt">white sand, the choice is yours.</p>
        </div>
        <hr />
        <div className="text">
          <h3 className="special-heading text-center">Why We Are?</h3>

          <div className="container mt-5">
            <div className="cent">
              <div className="col text-center icon">
                <img
                  src={customerService}
                  className="cardImg"
                  alt='Customer Service'
                />
                <h4>24 Hours support</h4>
              </div>
              <div className="col text-center icon">
                <img
                  src={loyalCustomer}
                  className="cardImg"
                  alt='Loyal Customer'
                />
                <h4>Best Service</h4>
              </div>
              <div className="col text-center icon">
                <img
                  src={discount}
                  className="cardImg"
                  alt='discount'
                />
                <h4>Discount to our constant clients</h4>
              </div>
              <div className="col text-center icon">
                <img src={wallet} className="cardImg"  alt='wallet'/>
                <h4>Best Price</h4>
              </div>
              <div className="col text-center icon">
                <img src={group} className="cardImg" alt='group' />
                <h4>Team of professionals</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default About
