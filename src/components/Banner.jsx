
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <section className='overflow-hidden'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            spaceBetween: 10,
            slidesPerView: 1
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 1
          },
          1024: {
            spaceBetween: 30,
            slidesPerView: 1
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,

        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-black h-dvw lg:h-dvh"
      >
        <SwiperSlide className='relative h-full'>
          <div className='px-5 absolute flex flex-col gap-4 justify-center items-center inset-0 bg-[url("https://i.ibb.co.com/S7WRXZSr/banner-1.png")] bg-no-repeat bg-cover bg-center'>
            <h1 className='text-5xl font-bold text-black text-center'>Fund and Help Others</h1>
            <p className='lg:w-1/2 lg:mx-auto lg:text-justify text-center text-xl font-semibold text-black'>Become a part of contributing to numerous social welfare and nonprofit campaigns and help people with innovative ideas to build their impactful and magnificent projects.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative h-full'>
          <div className='p-5 absolute flex flex-col gap-4 justify-center items-center inset-0 bg-[url("https://i.ibb.co.com/VRdc63C/banner-2.webp")] bg-no-repeat bg-cover bg-center'>
            <h1 className='text-5xl text-black font-bold text-center'>Let's Make the Impossible, Possible</h1>
            <p className='lg:w-1/2 lg:mx-auto lg:text-justify text-center text-xl text-black  font-semibold'> Join us today to play a role in something special. Together, we can make changes and bring your dreams to reality</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative h-full'>
          <div className='p-5 absolute flex flex-col gap-4 justify-center items-center inset-0 bg-[url("https://i.ibb.co.com/7JXcrVG3/banner-3.jpg")] bg-no-repeat bg-cover bg-center'>
            <h1 className='text-5xl text-black font-bold text-center'>Endless Opportunities To Grow</h1>
            <p className='lg:w-1/2 lg:mx-auto lg:text-justify text-center text-xl text-black font-semibold'>Start your Business or become a entrepreneur with the help many of supportive and kind benefactors.</p>
          </div></SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default Banner;
