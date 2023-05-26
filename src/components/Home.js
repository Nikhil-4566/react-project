import React from 'react'

export default function Home() {
  return (
    <div className='container'>
      <div class="col-12">
        <div class="row align-items-center">
            <div className='col-lg-7 ml-auto order-lg-2 aos-init aos-animate'>
                <img src='E:\reactproject\awesomeapp\src\assets\market-launch-pana.svg'></img>
            </div>
            <div class="col-lg-5">
                <h1 class="heading aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">Promote Your Products by Colorlib</h1>
                <div class="excerpt aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <p>Another cool free html css template by <a href="#" target="_blank" class="highlight">Colorlib</a> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                </div> 
                <p data-aos="fade-up" data-aos-delay="200" class="aos-init aos-animate">
                <a href="#features-section" class="btn btn-primary smoothscroll">See Features</a>
                <a href="#pricing-section" class="btn btn-outline-primary smoothscroll">Pricing</a>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
