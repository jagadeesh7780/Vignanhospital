import React from "react";
import "./Product.css";
import Header from "./Header";
import Appointment from "./Appointment";

const Products = () => {
  return (
    <div>
      <Header />
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>Our Products</h1>
      </section>
      {/* PRODUCT 1 */}
      <section className="product-section">
        <div className="product-image">
          <img src="/Mobilab.jpeg" alt="Mobilab" />
        </div>
        <div className="product-text">
          <h3>Mobilab</h3>
          <p>
            Mobilab is a portable diagnostic solution designed for healthcare
            professionals to deliver fast and accurate test results in any
            setting, including clinics, health camps, and remote areas. It
            offers 24 vital health parameters, covering heart (cholesterol, LDL,
            triglycerides), liver (bilirubin, albumin, AST, ALT), kidney
            (creatinine, eGFR), and anemia & diabetic profiles (hemoglobin,
            glucose). Mobilab provides comprehensive diagnostics, making it an
            essential tool for rapid health assessments.
          </p>
          <a href="/2 video.mp4">
            <button className="demo-btn">Watch Demo</button>
          </a>
        </div>
      </section>

      {/* PRODUCT 2 */}
      <section className="product-section">
        <div className="product-image">
          <img src="/prorithm.jpeg" alt="ProRITHM" />
        </div>
        <div className="product-text">
          <h3>ProRITHM</h3>
          <p>
            ProRITHM simplifies remote patient monitoring and early detection
            with its advanced RPM platform. Equipped with cutting-edge proRITHM
            devices, the platform continuously tracks essential health metrics
            in real-time, offering a comprehensive solution for both patients
            and healthcare providers. This technology ensures better health
            outcomes while providing peace of mind through continuous monitoring
            and timely interventions.
          </p>
          <a href="/prorithm.mp4">
            <button className="demo-btn">Watch Demo</button>
          </a>
        </div>
      </section>

      {/* PRODUCT 3 */}
      <section className="product-section">
        <div className="product-image">
          <img src="/ecg.jpeg" alt="ECG Pro Plus" />
        </div>
        <div className="product-text">
          <h3>ECG Pro Plus</h3>
          <p>
            Experience the future of cardiac care with the ECG pro-plus combo –
            a compact, digital ECG system designed for doctors and healthcare
            professionals. This device allows you to easily capture 12-lead
            ECGs, ensuring precise and reliable heart monitoring. Its portable
            design and advanced digital ECG technology enable seamless report
            sharing, facilitating timely medical intervention anytime, anywhere.
          </p>
          <a href="Mobilabvideo.mp4">
            <button className="demo-btn">Watch Demo</button>
          </a>
        </div>
      </section>

      {/* PRODUCT 4 */}
      <section className="product-section">
        <div className="product-image">
          <img src="/dring.jpeg" alt="D’Ring" />
        </div>
        <div className="product-text">
          <h3>D’Ring</h3>
          <p>
            Introducing D’Ring, the world’s first non-invasive diabetic risk
            assessment smart health ring. Powered by an AI-based algorithm, it
            delivers highly accurate, next-generation preventive healthcare
            solutions. Painless and easy to use, D’Ring offers continuous health
            monitoring anytime, anywhere, empowering users to take control of
            their health.
          </p>
          <a href="/3 video.mp4">
            <button className="demo-btn">Watch Demo</button>
          </a>
        </div>
      </section>
      <Appointment />
    </div>
  );
};

export default Products;
