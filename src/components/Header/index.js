import {Link} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="main-header-container">
      <div className="header-content-container">
        <img
          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721381903/img_sm_logo_en_dark_sptcgw.svg"
          alt="sri-mandir"
          className="company-logo"
        />
        <div className="nav-links">
          <Link className="nav-link" to="/">
            <p>Home</p>
          </Link>
          <Link className="nav-link" to="/puja">
            <p>Puja</p>
          </Link>
          <Link className="nav-link" to="/panchang">
            <p>Panchang</p>
          </Link>
          <Link className="nav-link" to="/temples">
            <p>Temples</p>
          </Link>
          <Link className="nav-link library-link" to="/library">
            <p>Library</p>
            <img
              src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721383217/down-arrow_y7avbo.png"
              alt="arrow"
              className="arrow-styling"
            />
          </Link>
        </div>
        <div className="select-button-container">
          <div className="select-language">
            <select className="select-main">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="dropdown-container">
            <button
              type="button"
              className="profile-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721382527/Default_Profile_cciwao.svg"
                alt="profile"
              />
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-list-content">
                  <h3>Hello, Sri Mandir Bhakt</h3>
                  <p>Welcome to Sri Mandir Puja Seva</p>
                </div>
                <hr />
                <div className="dropdown-list-content">
                  <p className="dropdown-content-head">Account Details</p>
                  <ul className="list-styles">
                    <li className="list-item-styling">
                      <div className="para-icons-cont">
                        <img
                          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400370/ic_user_profile_xzlnr1.svg"
                          alt="profile"
                          className="dropdown-list-icons"
                        />
                        <p>My Profile</p>
                      </div>
                      <img
                        className="dropdown-list-icons"
                        src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400464/ic_chevron_right_black_v7kjhl.svg"
                        alt="arrow"
                      />
                    </li>

                    <Link className="nav-link" to="/mypujabookings">
                      <li className="list-item-styling">
                        <div className="para-icons-cont">
                          <img
                            src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400307/ic_puja_history_wzgw8u.svg"
                            alt="profile"
                            className="dropdown-list-icons"
                          />
                          <p className="highligt">My Puja Bookings</p>
                        </div>
                        <img
                          className="dropdown-list-icons"
                          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400464/ic_chevron_right_black_v7kjhl.svg"
                          alt="arrow"
                        />
                      </li>
                    </Link>
                    <li className="list-item-styling">
                      <div className="para-icons-cont">
                        <img
                          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400307/ic_puja_history_wzgw8u.svg"
                          alt="profile"
                          className="dropdown-list-icons"
                        />
                        <p>My Ramotsav Bookings</p>
                      </div>
                      <img
                        className="dropdown-list-icons"
                        src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400464/ic_chevron_right_black_v7kjhl.svg"
                        alt="arrow"
                      />
                    </li>
                    <li className="list-item-styling">
                      <div className="para-icons-cont">
                        <img
                          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400422/ic_explore_puja_seva_mntbcp.svg"
                          alt="profile"
                          className="dropdown-list-icons"
                        />
                        <p>Book a Puja</p>
                      </div>
                      <div className="chip-arrow-container">
                        <chip className="chip">New</chip>
                        <img
                          className="dropdown-list-icons"
                          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400464/ic_chevron_right_black_v7kjhl.svg"
                          alt="arrow"
                        />
                      </div>
                    </li>
                  </ul>
                </div>

                <hr />

                <div className="dropdown-list-content">
                  <p className="dropdown-content-head">
                    Help & Support for Puja Booking
                  </p>
                  <div className="contact-phone">
                    <img
                      src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721400768/ic_action_help_call_eah7ee.svg"
                      alt="call"
                    />
                    <div className="contact-second-parent">
                      <p
                        style={{color: '#111928'}}
                        className="dropdown-content-head"
                      >
                        080-711-74417
                      </p>
                      <p
                        style={{fontSize: '10px'}}
                        className="dropdown-content-head"
                      >
                        You can call us from 10:30 AM-7:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="email-what-container">
                    <div className="contact-phone email-what-container-50">
                      <img
                        src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721401225/ic_action_help_mail_ygutof.svg"
                        alt="contact-icons "
                        className="social-icons"
                      />
                      <p
                        style={{color: '#111928'}}
                        className="dropdown-content-head"
                      >
                        Email us
                      </p>
                    </div>
                    <div className="contact-phone email-what-container-50">
                      <img
                        src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721401321/ic_action_help_whats_app_miwwuf.svg"
                        alt="contact-icons "
                        className="social-icons"
                      />
                      <p
                        style={{color: '#111928'}}
                        className="dropdown-content-head"
                      >
                        Whatsapp us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
