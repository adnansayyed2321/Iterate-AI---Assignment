import {Link} from 'react-router-dom'

import './index.css'

const MyPujaBookings = () => (
  <div className="myPujaBookings">
    <div className="myPujaBookingsMainContainer">
      <Link className="nav-link" to="/puja">
        <div className="puja-history-container">
          <img
            src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721403192/back_arrow_v0yntr.svg"
            alt="arrow"
            className="logo-arrow"
          />
          <p className="puja-history">Puja History</p>
        </div>
      </Link>
      <div className="empty-container">
        <img
          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721404619/empty_stack_c9tvwg.svg"
          alt="not-found"
        />
        <h1 className="empty-files-heading">No Puja has been booked yet</h1>
        <p className="para-empty-content">
          Book your Puja online at Popular Temples of India. Panditji will take
          sankalp with your name and gotra during the Puja
        </p>
        <Link className="nav-link" to="/puja">
          <button type="button" className="booking-button">
            Book Pooja Now
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default MyPujaBookings
