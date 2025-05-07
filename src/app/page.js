import Image from "next/image";
import Styles from "./page.module.css";
import NavBar from "./components/NavBar/page";
import ModelImage from "../../public/WhatsApp Image 2025-05-06 at 11.09.53_8e93526e.jpg";
import Img1 from "../../public/Img1.jpg";
import Img2 from "../../public/Img2.jpg";

export default function Home() {
  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <NavBar />
        <div className={Styles.heroSection}>
          <h1>how we built an</h1>
          <h2>Artificial Pancreas...</h2>
          <h3>
            Let&apos;s dive into the process of how we built the model of an
            Artificial Pancreas!
          </h3>
          <div>
            <Image
              className={Styles.pancreasModelImg}
              src={ModelImage}
              alt="Artificial Pancreas Model"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className={Styles.contentSection}>
          <div>
            <h1>What is an Artificial Pancreas?</h1>
          </div>
          <p>
            An artificial pancreas is a revolutionary biomedical device that
            mimics the glucose-regulating function of a healthy pancreas. It
            combines a continuous glucose monitor (CGM), an insulin pump, and a
            control algorithm to automate insulin delivery in diabetic patients.
          </p>
        </div>
        <div className={Styles.contentSection} id="construction">
          <div>
            <h1>Components of the Model</h1>
          </div>
          <h2>1. Continuous Glucose Monitor (CGM)</h2>
          <p>Simulated using a round cap.</p>
          <p>
            Represents the sensor that reads glucose levels from interstitial
            fluid.
          </p>
          <h2>2. Controller Device</h2>
          <p>Simulated using a cardboard phone screen.</p>
          <p>Processes data and decides insulin doses based on algorithms.</p>
          <h2>3. Insulin Pump</h2>
          <p>Made with a small box and tubing.</p>
          <p>Mimics the mechanism that injects insulin into the body.</p>
          <h2>4. Insulin Supply</h2>
          <p>Represented by a dropper bottle or refill tube.</p>
          <p>Stores synthetic insulin for delivery .</p>
          <h2>5. Tubes/Wires</h2>
          <p>Represent insulin pathways and data connections.</p>
        </div>

        <div className={Styles.contentSection} id="working">
          <div>
            <h1>How it Works?</h1>
          </div>
          <h2>Step 1: Glucose Monitoring</h2>
          <p>CGM continuously measures blood sugar levels.</p>

          <h2>Step 2: Data Processing</h2>
          <p>
            Controller device analyzes glucose data and calculates insulin
            needs.
          </p>

          <h2>Step 3: Insulin Delivery</h2>
          <p>
            Insulin pump receives the signal and delivers insulin to maintain
            normal glucose levels.
          </p>

          <h2>Step 4: Feedback Loop</h2>
          <p>
            System continuously updates and adjusts insulin dosing based on new
            readings.
          </p>
        </div>
        <div className={Styles.contentSection}>
          <div>
            <h1>Materials used in the Model</h1>
          </div>
          <h2>Stationaries:</h2>
          <p>cardboard,</p>
          <p>plastic caps,</p>
          <p>refill tubes,</p>
          <p>colored wires,</p>
          <p>hot glue,</p>
          <p>tape,</p>
          <p>printed labels, and</p>
          <p>paper cutouts.</p>
        </div>
        <div className={Styles.contentSection}>
          <div>
            <h1>Significance of the Model</h1>
          </div>
          <p>
            This model helps visualize the closed-loop control system used in
            diabetes management and demonstrates how biomedical engineering
            integrates electronics, biology, and software to improve human
            health.
          </p>
        </div>
        <div className={Styles.contentSection}>
          <div>
            <h1>Conclusion</h1>
          </div>
          <p>
            This static model effectively illustrates the functioning of an
            artificial pancreas and its importance in advancing diabetes care
            technology.
          </p>
        </div>
        <div className={Styles.contentSection}>
          <div>
            <h1>Credits</h1>
          </div>
          <p>An Initiative by Bratati Sen.</p>
          <div className={Styles.contentImg}>
            <Image
              className={Styles.pancreasModelImg1}
              src={Img1}
              alt="Artificial Pancreas Model"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className={Styles.pancreasModelImg1}
              src={Img2}
              alt="Artificial Pancreas Model"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
