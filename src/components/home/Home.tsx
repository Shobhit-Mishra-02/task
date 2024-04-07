import "./Home.css";

import Navigation from "./Navigation";
import Footer from "./Footer";

function HomeContent() {
  return (
    <div className="home_content">
      <h1 className="home_content__heading">Please verify your email...</h1>
      <div className="home_content__email_icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="email_icon"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>
      <div className="home_content__text">
        <p>
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p>
          <strong>account@refero.design</strong>
        </p>

        <p>
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <span>resend the confirmation email</span>
        </p>

        <p>
          Wrong email address? <span>Change it.</span>
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navigation />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;
