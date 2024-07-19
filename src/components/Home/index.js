import './index.css'

const Home = () => (
  <div className="home-main-container">
    <div className="hero-section-main-container">
      <div className="heading-section-hero-first">
        <div className="badge-para">
          <img
            src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721385382/img_achievement_cvbf5o.webp"
            alt="badge"
          />
          <p>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
        </div>
        <p className="hero-section-heading">
          Pray daily with <span style={{color: '#e37314'}}>Sri Mandir</span>.
          One App for all your devotional needs.
        </p>
        <div className="button-container">
          <button type="button" className="hero-section-button">
            <img
              src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721386071/img_playstore_logo_ss0em8.svg"
              alt="playstrore"
              className="button-content"
            />
          </button>
          <button type="button" className="hero-section-button">
            <img
              src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721386350/img_appstore_logo_wyq6ep.svg"
              alt="appstrore"
              className="button-content"
            />
          </button>
        </div>
      </div>
      <div className="heading-section-promo-second">
        <img
          className="promo-styles"
          src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1721386852/img_hero_artwork_en_hcxnjw.webp"
          alt="promo-section"
        />
      </div>
    </div>
  </div>
)

export default Home
