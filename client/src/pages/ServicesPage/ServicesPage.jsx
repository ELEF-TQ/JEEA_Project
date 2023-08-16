import React, { useState, useContext } from "react";
import "./ServicesPage.scss";
//assets
import star from "../../assets/star.svg";
import { AiFillCheckCircle } from "react-icons/ai";

import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import { Services } from "../../database/Services";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const { isDarkModeActive } = useContext(ThemeModeContext);

  const filterPole = (pole) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      const updatedPole = Services.filter((currentPole) => {
        return currentPole.pole === pole;
      });

      setServices(updatedPole);
    }, 420);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={isDarkModeActive ? "services-page dark" : "services-page"}>
      <motion.div
        className={isDarkModeActive ? "progress-bar dark" : "progress-bar"}
        style={{ scaleX }}
      />
      {/* Services title: Browse Services */}
      <div className="Title">
        <div className="title__container">
          <h1 className={isDarkModeActive ? "title dark" : "title"}>
            Browse Services
          </h1>
          <img src={star} alt="star" className="starImg" />
        </div>
      </div>

      {/* Services Navbar */}
      <div className="navbar__services">
        <div className="navbar__services-container">
          <ul className="navbar__services-links">
            {/* <li>
              <button>All</button>
            </li> */}
            <li>
              <button
                onClick={() => filterPole("info")}
                className={
                  isDarkModeActive ? "button-pole dark" : "button-pole"
                }
              >
                Info
              </button>
            </li>
            <li>
              <button
                onClick={() => filterPole("design")}
                className={
                  isDarkModeActive ? "button-pole dark" : "button-pole"
                }
              >
                Design
              </button>
            </li>
            <li>
              <button
                onClick={() => filterPole("rtc")}
                className={
                  isDarkModeActive ? "button-pole dark" : "button-pole"
                }
              >
                RTC
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Container Cards  */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className={
          isDarkModeActive
            ? "services__cards-container dark"
            : "services__cards-container"
        }
      >
        {services.map((element) => {
          return (
            <div className="services__card">
              <h3 className="services__card-title">{element.title}</h3>
              <p className="services__card-desc">{element.desc}</p>
              <button
                className={
                  isDarkModeActive ? "button-main dark" : "button-main"
                }
              >
                APPLY
              </button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesPage;