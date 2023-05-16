import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import Carousel from '../components/Carousel';
import axios from 'axios';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([])
    SwiperCore.use([EffectCoverflow, Pagination]);

    const getData = async () => {
        const res = await axios.get("https://api.instantwebtools.net/v1/airlines?page=0&size=10")
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className='carusel'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Carousel title="Creative Design" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Carousel title="Modern Design" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='card'>
                {data
                    .slice(0, 3)
                    .map(e => (
                        <Card
                            title={e.name}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={e.logo} />}
                        >
                            <p>{e.slogan}</p>
                        </Card>
                    ))}
            </div>
            <div className='build'>
                <div className='together'>
                    <div className='level'>
                        <p>01</p>
                        <div className='line'></div>
                        <p>Infrastructure</p>
                    </div>
                    <div className='text'>
                        <h2>Let's Build Together</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className='image'>
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg.webp" alt="" />
                </div>
            </div>
            <div className='collabration'>
                <div className='image'>
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_2_long.jpg" alt="" />
                </div>
                <div className='together'>
                    <div className='level'>
                        <p>02</p>
                        <div className='line'></div>
                        <p>Collaborate</p>
                    </div>
                    <div className='text'>
                        <h2>Open for Collaboration</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div className='head'>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                </div>
                <div className='photos'>
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_1.jpg.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_2.jpg.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_3.jpg.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_4.jpg.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_5.jpg.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/hexa/images/img_6.jpg.webp" alt="" />
                </div>
            </div>
            <div className='ceo'>
                <div className='head'>
                    <h2>Testimonial</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                </div>
                <div className='people'>
                    <div className='human'>
                        <div className="profile">
                            <div className='avatar'>
                                <img src="https://preview.colorlib.com/theme/hexa/images/person_3.jpg.webp" alt="" />
                            </div>
                            <div className="description">
                                <h2>John Smith</h2>
                                <span>CEO, Co-Founder</span>
                            </div>
                        </div>
                        <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “</p>

                    </div>
                    <div className='human'>
                        <div className="profile">
                            <div className='avatar'>
                                <img src="https://preview.colorlib.com/theme/hexa/images/person_2.jpg.webp" alt="" />
                            </div>
                            <div className="description">
                                <h2>Joshua Darren</h2>
                                <span>CEO, Co-Founder</span>
                            </div>
                        </div>
                        <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “</p>

                    </div>
                    <div className='human'>
                        <div className="profile">
                            <div className='avatar'>
                                <img src="https://preview.colorlib.com/theme/hexa/images/person_3.jpg.webp" alt="" />
                            </div>
                            <div className="description">
                                <h2>John Smith</h2>
                                <span>CEO, Co-Founder</span>
                            </div>
                        </div>
                        <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. “</p>

                    </div>
                </div>
            </div>
            <div className='generally'>
                <div className='head'>
                    <h2>Blog Posts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                </div>
                <div className='post'>
                    <div className='first'>
                        <div className='blog'>
                            <img src="https://preview.colorlib.com/theme/hexa/images/img_1.jpg.webp" alt="" />
                        </div>
                        <div className='link'>
                            <span>Feb 26th, 2018</span>
                            <h3><Link to={"/ProductsPost"} style={{ textDecoration: "none", color: "#e74208" }}>Free Website Template at Free-Template.co</Link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus ipsa earum nemo consectetur cupiditate necessitatibus suscipit assumenda perspiciatis provident.</p>

                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='second'>
                        <div className='first'>
                            <div className='blog'>
                                <img src="https://preview.colorlib.com/theme/hexa/images/img_2.jpg.webp" alt="" />
                            </div>
                            <div className='link'>
                                <span>Feb 26th, 2018</span>
                                <h3><Link to={"/ProductsPost"} style={{ textDecoration: "none", color: "#e74208" }}>Free Website Template at Free-Template.co</Link></h3>
                                <button>Read More</button>
                            </div>
                        </div>
                        <div className='first'>
                            <div className='blog'>
                                <img src="https://preview.colorlib.com/theme/hexa/images/img_3.jpg.webp" alt="" />
                            </div>
                            <div className='link'>
                                <span>Feb 26th, 2018</span>
                                <h3><Link to={"/ProductsPost"} style={{ textDecoration: "none", color: "#e74208" }}>Free Website Template at Free-Template.co</Link></h3>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home