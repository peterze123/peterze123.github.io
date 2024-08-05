import { styles } from "../styles";
import {ComputersCanvas} from "./canvas/index.js";

const Hero = () => {
  return (
      <section className={`relative w-full h-screen mx-auto`}>
          <div
              className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
          >
              <div className='flex flex-col justify-center items-center mt-5'>

              </div>

              <div>
                  <h1 className={`${styles.heroHeadText} text-gray-300`}>
                      <a> I'm Peter Ze</a>
                  </h1>
                  <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
                      <a className="loading">A Novice Developer Interested in the Capital Markets</a>
                  </p>
              </div>
          </div>
    <ComputersCanvas />

      </section>
  );
};

export default Hero;
