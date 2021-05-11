/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react"
import { Button } from "../ButtonElements"

import Video from "../../videos/HeroSectionVideo.mp4"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ScrollDown,
} from "./HeroElements"
const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="HeroSectionVideo/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Algorithms Made Easy</HeroH1>
        <HeroP>Let's go and learn new algorithms visually</HeroP>
        <HeroBtnWrapper>
          <ScrollDown>Scroll Down</ScrollDown>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
