import React from "react";
import { useInView } from 'react-intersection-observer';
import "./style.scss";

export default function Skills() {

  const { ref : leftMotion, inView : setLeftMotion } = useInView({
    threshold: 0,
  });

  const { ref : right, inView : setRight } = useInView({
    threshold: 0,
  });

  const { ref : leftUi, inView : setLeftUi } = useInView({
    threshold: 0,
  });

  return (
    <div>
      <h1 ref={leftMotion} className={ setLeftMotion ? "title-skill title-skill__motion animateSkillsLeft " : "title-skill title-skill__motion"}> MOTION</h1>

      <h1 ref={right}  className={ setRight ? " title-skill title-skill__coding animateSkillsRight" : " title-skill title-skill__coding"}>CODING</h1>

      <h1  ref={leftUi} className={ setLeftUi ? "title-skill title-uiDesign animateSkillsLeft " : "title-skill title-uiDesign"}>UI DESIGN</h1>

    </div>
  );
}
