// Import Swiper React components
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../img/sertif winner blockchain (1).png"
import Img2 from "../img/Bagas Meganata_Sertifikat Bootcamp Kotakode x Progate 2.0_page-0001.jpg"
import Img1 from "../img/Sertif Blockchain_page-0001.jpg"
import Img3 from "../img/PYTHON PROGATE_page-0001.jpg"
import Img4 from "../img/Sertifikat kursus JavaScript_page-0001.jpg"
import Img5 from "../img/Sertifikat Machine learning_page-0001.jpg"
import Img6 from "../img/SERTIFIKAT PENGEMBANGAN WEB_page-0001.jpg"
import ImgPribadi from "../img/IMG20210526100211.jpg"
import ImgProject from "../img/mintnft.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Navigation } from "swiper";

function Main() {
    return(
        
        <div>    
            <div id="tentangDiri" className="md:w-fit justify-center lg:flex-row flex-col scroll-mt-80 mt-[200px] my-[100px] mx-[100px] border-2 border-solid border-slate-200 py-12 px-8 shadow-lg rounded-2xl flex">
                <div className="flex flex-col lg:text-left text-center">
                    <h1 className="text-4xl font-Nunito w-full text-sky-400 font-bold">Tentang Diri</h1>
                    <p className="bg-white py-5 text-lg lg:w-[80%] w-full font-Lato">Haloo, namaku <span className="bg-white font-bold text-red-500">Bagas Meganata</span>. Biasa dipanggil Bagas atau Nata, sekarang saya sedang menempuh kuliah di Universitas Brawijaya di jurusan Teknologi Informasi Fakultas Ilmu Komputer. Untuk sekarang saya masih semester 3 dan saya memiliki ketertarikan tinggi mengenai teknologi Blockchain yang sedang booming pada saat ini.
                    <p className="mt-10">Sekarang bahasa yang saya kuasai adalah HTML, CSS, Javascript ( belum terlalu ), framework Tailwind dan sedang belajar mengenai framework Front-end yaitu React. Kemudian saya juga paham mengenai <span className="text-red-500 font-bold">bahasa Solidity serta developing sebuah blockchain.</span></p></p>
                </div>
                <img src={ImgPribadi} alt="gambar" className="flex-row justify-center lg:max-h-[400px] rounded-xl"/>
            </div>

            <div id="project" className="lg:w-fit lg:justify-center lg:flex-row flex-col scroll-mt-40 w-max-full py-10 flex items-center">
                <div className="lg:text-left text-center mt-[50px] lg:mx-[20px] mx-[100px] flex flex-col lg:w-[40%]">
                    <h1 className="text-4xl font-Nunito text-sky-400 font-bold">Project</h1>
                    <h3 className="mt-5 text-xl ">Minting Token NFT</h3>
                    <p className="my-5 text-lg  w-full font-Lato">Disini saya pernah membuat sebuah project tentang token NFT yang memiliki fungsi minting dimana saya dapat membuat dan menambahkan NFT ke blockchain. <span className="text-red-500 underline font-bold">Silahkan klik pada gambar untuk menuju web page.</span> </p>
                </div>
                <div className="flex flex-row mt-10 lg:w-[50%] w-[90%] items-center">
                    <a href="https://natabagass.github.io/ERC721/frontend/index.html">
                        <img src={ImgProject} alt="gambar" className="shadow-lg rounded-md w-30 lg:w-full mr-10 hover:-translate-y-6 hover:shadow-2xl duration-500 transition"/>
                    </a>
                </div>
            </div>

            <div id="sertifikasi" className="scroll-mt-36 border border-solid border-slate-200 rounded-xl mx-auto flex mt-28 max-w-6xl flex-col items-center shadow-xl">
                <div className="flex flex-col items-center p-5 mx-[80px]">
                    <h1 className="text-4xl font-Nunito text-sky-400 font-bold">Sertifikasi</h1>
                    <p className="font-Lato text-lg text-center mt-5">Saya telah mengikuti berbagai sertifikasi mulai dari web development, Ethereum & Solidity, Kursus Python, Kursus Javascript, Dasar Machine Learning.</p>
                </div>
                <div className="w-[500px]">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <img src={Img} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img1} alt="logo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img2} alt="Logo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img6} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
    </div>

    )
}
export default Main;