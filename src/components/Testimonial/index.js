import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  TestimonialContainer,
  TestimonialWrap,
  TestimonialH1,
  TestimonialRow,
  TestimonialImgContainer,
  TestimonialImg,
  TestimonialContent,
  TestimonialContentH3,
  TestimonialContentH4,
  TestimonialContentP
} from './TestimonialElement'
import { testimonies } from './Data'

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialWrap>
        <TestimonialH1>What people are saying</TestimonialH1>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {testimonies.map((testimony, i) =>
            <TestimonialRow key={i}>
              <TestimonialImgContainer>
                <TestimonialImg src={testimony.img} />
              </TestimonialImgContainer>
              <TestimonialContent>
                <TestimonialContentH3>{testimony.name}</TestimonialContentH3>
                <TestimonialContentH4>{testimony.position}</TestimonialContentH4>
                <TestimonialContentP>
                  {testimony.testimony}
                </TestimonialContentP>
              </TestimonialContent>
            </TestimonialRow>
          )}
        </Carousel>
      </TestimonialWrap>
    </TestimonialContainer>
  )
}

export default Testimonial;
