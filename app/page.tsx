import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>

        <div className="counter">
          {/* Animated numbers that run during the loading sequence
      Digits will be created dynamically using GSAP */}
          <div className="counter-1 digit"></div>
          <div className="counter-2 digit"></div>
          <div className="counter-3 digit"></div>
        </div>

        <div className="image-container">
          <div className="img">
            <img src="/img-1.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-2.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-3.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-4.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-5.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-6.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-7.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-8.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-9.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-10.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-11.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-12.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-13.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-14.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-15.jpg" alt="" />
          </div>
        </div>

        <nav>
          <div className="logo-name">
            <a href="#">Evenrise</a>
          </div>

          <div className="nav-items">
            <div className="links">
              <a href="#">Portfolio</a>
              <p></p>
              <a href="#">About</a>
            </div>
          </div>

          <div className="cta">
            <a href="">Contact Me</a>
          </div>

          <div className="divider"></div>
        </nav>

        <div className="sidebar">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="divider"></div>
        </div>

        <div className="header">
          <h1>Visual Designer for modern brands</h1>
        </div>

        <div className="site-info">
          <h2>
            A designer and developer with a passion for creating beautiful and
            functional websites.
          </h2>
          <div className="divider"></div>
          <div className="site-info-copy">
            <p>Award winning designer and developer based in India.</p>
            <p>Developing since 2024.</p>
          </div>
        </div>

        <div className="hero-footer">
          <h2>Showcase Reel</h2>
        </div>
      </section>
    </>
  );
}
