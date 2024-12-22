import React from 'react';

function MainContent() {
  return (
    <>
      <section className="main">
        <div className="main-content">
          <h1 className="main-heading">
            The biggest Indian hits. Ready to watch here from ₹ 149.
          </h1>
          <h2>Join today. Cancel anytime.</h2>
          <div className="sign">
            <h4>
              Ready to watch? Enter your email to create or restart your membership.
            </h4>
            <div className="sign-process">
              <input type="email" placeholder="Email address" />
              <button className="btn started">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <div className="separation"></div>
    </>
  );
}

export default MainContent;
