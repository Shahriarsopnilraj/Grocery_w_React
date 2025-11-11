import React from "react";
import Heading from "../Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="Customers" heading="Saying" />
        <div className="py-5 gap-x-3 flex justify-end">
          <button className="text-2xl custom-prev text-black hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg w-11 h-11 bg-zinc-100  flex justify-center items-center">
            <IoIosArrowBack />
          </button>
          <button className="text-2xl custom-next text-black hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg w-11 h-11 bg-zinc-100  flex justify-center items-center">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper 
        navigation={{
          nextEl:".custom-next",
          prevEl:".custom-prev"
        }} 
        loop={true}
        breakpoints={{
          640:{slidesPerView:1 , spaceBetween:20},
          768:{slidesPerView:2 , spaceBetween:20},
          1024:{slidesPerView:3 , spaceBetween:20}
        }}
        modules={[Navigation]} className="mySwiper">
          {
            review.map(item =>{
              return(
                 <SwiperSlide className="bg-zinc-100 rounded-xl p-8 ">
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-full outline outline-2 outline-orange-500 outline-offset-4"> <img src={item.image} alt="" className="w-16 h-16 rounded-full" />
            </div>
            <div>
              <h5 className="text-xl font-bold">{item.name}</h5>
              <p className="text-zinc-600">{item.profession}</p>
              <span className="flex text-yellow-400 mt-3 text-xl gap-3">
                {Array.from({length: item.rating},(_,index)=>(
                  <FaStar/>
                ))}
              </span>
            </div>
          </div>
          <div className="mt-10 min-h-[15vh]">
            <p className="text-zinc-600">{item.para}</p>
          </div>
        </SwiperSlide> 
              )
            })
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 4,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 4,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer3,
  },
  {
    id: 4,
    name: "Alya Zahra",
    profession: "Model",
    rating: 3,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer5,
  },
];
