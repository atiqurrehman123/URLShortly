import React from "react";

function Statistic() {
  return (
    <section className="statistic">
      <div className="container-fluid container-md">
        <h3 className="text-center mb-4">Advanced Statistics</h3>
        <p className="text-center">
          Track how your links are performing across the web with our <br />
          advanced statistics dashboard.
        </p>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-start">
            <div className="card">
              <div className="icon">
                <img
                  src={
                    require("./../assets/img/icon-brand-recognition.svg")
                      .default
                  }
                  alt="icon-brand-recognition"
                />
              </div>
              <h4>Brand Recognition</h4>
              <p className="mb-0">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 position-relative">
            <div className="card card-middle">
              <div className="icon">
                <img
                  src={
                    require("./../assets/img/icon-detailed-records.svg").default
                  }
                  alt="icon-detailed-records"
                />
              </div>
              <h4>Detailed Records</h4>
              <p className="mb-0">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <hr />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-end">
            <div className="card">
              <div className="icon">
                <img
                  src={
                    require("./../assets/img/icon-fully-customizable.svg")
                      .default
                  }
                  alt="icon-fully-customizable"
                />
              </div>
              <h4>Fully Customizable</h4>
              <p className="mb-0">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistic;
