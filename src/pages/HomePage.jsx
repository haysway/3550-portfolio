import profileImage from '../assets/me.png';

function HomePage() {
  return (
    <section>
      <h1>Personal Portfolio</h1>
      <div className="profile-photo-wrap">
        <img src={profileImage} alt="Hayden Swain-Schmit" className="profile-picture" />
      </div>
      <p>
        My name is Hayden Swain-Schmit. I will be graduating from Weber State University with
        my bachelors in Computer Science in December of 2026. I currently work part time at Northrop Grumman
        developing computational software for ballisticians. My goals are to continue learning as many different frameworks and tools
        as I can and continuing to develop my skill set!
      </p>
    </section>
  );
}

export default HomePage;