"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MobileComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false
  }

  return (
    <main className="main">
      <section className="athlets">
        <div className="athlets__image"></div>
        <div className="athlets__first">
          <div className="athlets__container">
            <div className="athlets__group">
              <div className="text__title">ATHLETS</div>
              <div className="subtitle_group">
                <span className="text__number--default">01</span>
                <span className="text__subtitle">CONNECTION</span>
              </div>
              <div className="text__detail--black">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </div>
            </div>
          </div>
        </div>
        <div className="athlets__second">
          <div className="athlets__container">
            <div className="athlets__group">
              <div className="subtitle_group">
                <span className="text__number--default">02</span>
                <span className="text__subtitle">COLLABORATION</span>
              </div>
              <div className="text__detail--black">
                Work with other student athletes to  increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </div>
            </div>
          </div>
        </div>
        <div className="athlets__third">
          <div className="athlets__container">
            <div className="athlets__group">
              <div className="subtitle_group">
                <span className="text__number--white">03</span>
                <span className="text__subtitle">GROWTH</span>
              </div>
              <div className="text__detail--white">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc 
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <Slider {...settings}>
            <div>
              <div className="slide__group">
                <div className="slide__title">
                  <span className="text__number--default">01</span>
                  <span className="text__subtitle">CONNECTION</span>
                </div>
                <div className="slide__detail">
                  Connect with coaches directly, you can ping coaches to view
                  profile.
                </div>
              </div>
            </div>
            <div>
              <div className="slide__group">
                <div className="slide__title">
                  <span className="text__number--default">02</span>
                  <span className="text__subtitle">COLLABORATION</span>
                </div>
                <div className="slide__detail">
                  Work with other student athletes to  increase visability. When
                  you share and like other players videos it will increase your
                  visability as a player. This is the team work aspect to
                  Surface 1.
                </div>
              </div>
            </div>
            <div>
              <div className="slide__group">
                <div className="slide__title">
                  <span className="text__number--default">03</span>
                  <span className="text__subtitle">GROWTH</span>
                </div>
                <div className="slide__detail">
                  Resources and tools for you to get better as a student
                  Athelte. Access to training classes, tutor sessions, etc 
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="player">
        <div className="player__image"></div>
        <div className="player__first">
          <div className="player__container">
            <div className="player__group">
              <div className="text__title">PLAYERS</div>
              <div className="subtitle_group">
                <span className="text__number--default">01</span>
                <span className="text__subtitle">CONNECTION</span>
              </div>
              <div className="text__detail--black">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </div>
            </div>
          </div>
        </div>
        <div className="player__second">
          <div className="player__container">
            <div className="player__group">
              <div className="subtitle_group">
                <span className="text__number--default">02</span>
                <span className="text__subtitle">COLLABORATION</span>
              </div>
              <div className="text__detail--black">
                Work with recruiter to increase your chances of finding talented
                athlete.
              </div>
            </div>
          </div>
        </div>
        <div className="player__third">
          <div className="player__container">
            <div className="player__group">
              <div className="subtitle_group pt-87">
                <span className="text__number--whitepurple">03</span>
                <span className="text__subtitle">GROWTH</span>
              </div>
              <div className="text__detail--white pt-21 pb-95">
                Save your time, recruit proper athlets for your team.
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <Slider {...settings}>
            <div>
              <div className="slide__group">
                <div className="slide__title">
                  <span className="text__number--default">01</span>
                  <span className="text__subtitle">CONNECTION</span>
                </div>
                <div className="slide__detail">
                  Connect with talented athlete directly, you can watch their
                  skills through video showreels directly from Surface 1.
                </div>
              </div>
            </div>
            <div>
              <div className="slide__group">
                <div className="slide__title">
                  <span className="text__number--default">02</span>
                  <span className="text__subtitle">COLLABORATION</span>
                </div>
                <div className="slide__detail">
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </div>
              </div>
            </div>
            <div>
              <div className="slide__group">
                <div className="slide__title">
                  <span className="text__number--default">03</span>
                  <span className="text__subtitle">GROWTH</span>
                </div>
                <div className="slide__detail">
                  Save your time, recruit proper athlets for your team.
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </main>
  )
}

export default MobileComponent
