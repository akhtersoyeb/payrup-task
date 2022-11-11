import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-20 bg-blue-50">
        <div className="grid grid-cols-2 max-w-7xl mx-auto gap-8 py-8 px-6 md:grid-cols-5">
          <div>
            <h2 className="mb-6 font-semibold text-primary text-lg uppercase">MOBILE RECHARGE & DTH</h2>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className=" hover:underline">Mobile Prepaid</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Mobile Postpaid</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">DTH Recharge</a>
              </li>

            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-semibold text-primary text-lg uppercase">BILL PAYMENTS</h2>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className=" hover:underline">Broadband</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Electricity</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Landline Bill</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Piped Gas</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Water</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">LPG</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Cable</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Housing Society</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-semibold text-primary text-lg uppercase">UTILITY PAYMENT</h2>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className=" hover:underline">Life Insurance</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Health Insurance</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Loan Repayment</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Municipal Taxes</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Subscription</a>
              </li>

            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-semibold text-primary text-lg uppercase">TRAVEL BOOKINGS</h2>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className=" hover:underline">Flight Booking</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Hotel Booking</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Bus Booking</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Train Booking</a>
              </li>

            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-semibold text-primary text-lg uppercase">E-GIFT CARDS</h2>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className=" hover:underline">eGift Cards</a>
              </li>

            </ul>
          </div>

        </div>

        <div className='bg-slate-900 rounded-tl-md rounded-tr-md mx-10 px-4 py-2 text-sm flex flex-col gap-y-6 justify-center md:flex-row md:justify-between'>
          <ul className='text-white flex flex-wrap gap-4'>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>FAQs</a>
            </li>
            <li>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
          <p className='text-white text-sm'>2021-2022 PayRup | All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer