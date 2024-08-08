// components/ScrollMagicComponent.js
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import "./index.css";

const ScrollMagicComponent = () => {
  const [ScrollMagic, setScrollMagic] = useState(null);

  useEffect(() => {
    // 动态导入 ScrollMagic
    import('scrollmagic').then((module) => {
      setScrollMagic(module.default);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && ScrollMagic) {
      const controller = new ScrollMagic.Controller();

      const wipeAnimation = gsap.timeline()
        .to("#slideContainer", { duration: 0.5, z: -150 })
        .to("#slideContainer", { duration: 1, x: "-25%" })
        .to("#slideContainer", { duration: 0.5, z: 0 })
        .to("#slideContainer", { duration: 0.5, z: -150, delay: 1 })
        .to("#slideContainer", { duration: 1, x: "-50%" })
        .to("#slideContainer", { duration: 0.5, z: 0 })
        .to("#slideContainer", { duration: 0.5, z: -150, delay: 1 })
        .to("#slideContainer", { duration: 1, x: "-75%" })
        .to("#slideContainer", { duration: 0.5, z: 0 });

      new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
      })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);

      return () => {
        controller.destroy();
      };
    }
  }, [ScrollMagic]);

  return (
    <div id="pinContainer" className="pinContainer">
      <div id="slideContainer" className="slideContainer">
        <section className="panel blue">
          <b>ONE</b>
        </section>
        <section className="panel turqoise">
          <b>TWO</b>
        </section>
        <section className="panel green">
          <b>THREE</b>
        </section>
        <section className="panel bordeaux">
          <b>FOUR</b>
        </section>
      </div>
    </div>
  );
};

export default ScrollMagicComponent;
