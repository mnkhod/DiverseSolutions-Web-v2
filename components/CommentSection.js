import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination} from 'swiper';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const commentData = [
    {
        profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Alex Regelman',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
        info: 'Co-founder, Colabrio'
    },
    {
        profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Alex Regelman',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
        info: 'Co-founder, Colabrio'
    },
    {
        profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Alex Regelman',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
        info: 'Co-founder, Colabrio'
    },
    {
        profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Alex Regelman',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
        info: 'Co-founder, Colabrio'
    }
]
function CommentSection() {

      return (
        <CommentSectionStyled>
            <div className='inner-comment'>
                <div className='head'>
                    <p className='home-heading-top'>WHAT PEOPLE SAY?</p>
                    <h2>TESTIMONIALS.</h2>
                </div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {commentData.map(slide => 
                       <SwiperSlide className='slide'>                             
                            <p className='text'>{slide.text}</p>
                            <img src={slide.profileImg} alt={slide.profileImg}/>
                            <h3>{slide.name}</h3>
                            <p className='info'>{slide.info}</p>
                       </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </CommentSectionStyled>
    )
}   

const CommentSectionStyled = styled.div`
@media only screen and (orientation:portrait) {
    .inner-comment {
        .slide {
            width: 100% !important;
            img {
                width: 15vh !important;
                height: 15vh !important;
            }
        }
        .info {
            text-align: center;
            margin-bottom: 2vh !important;
        }
        .swiper-pagination {
            width: 30vh !important;
            .swiper-pagination-bullet {
                width: 1vh !important;
                height: 1vh !important;
                margin: 0 0.5vh !important;
            }
        }
        width: 95% !important;
        .text {
            width: 100%!important;
        }
        p {
            width: 100% !important;
            font-size: 4vh !important;
            line-height: normal !important;
        }
    }
}
    width: 100vw;
    background: #11141b;
    padding: 5vw 0;
    &:hover .swiper-button-prev{
            left: 1vw;
            opacity: 1;
            transition: 0.5s;
        }
    &:hover .swiper-button-next {
            right: 1vw;
            opacity: 1;
            transition: 0.5s;
        }
    .inner-comment {
        width: 65%;
        margin: 0 auto;
    }
    .text {
        width: 60%;
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.07vw;
        font-weight: 300;
        opacity: 0.7;
    }
    .info {
        margin-bottom: 2vw;
    }
    h3 {
        color:#75dab4;
        margin: 0;
        margin-top: 1vw;
    }
    .head {
        h2 {
            margin: 0;
            font-size: 4vw;
            text-align: center;
            text-shadow: 0 8px rgba(255, 255, 255, 0.05);
            margin-bottom: 2.5vw;
        }
    }
    .slide {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        img {
            width: 3vw;
            height: 3vw;
            object-fit: cover;
            border-radius: 50%;
        }
        justify-content: center;
        align-items: center;
    }
    .swiper-wrapper {
        width: 100%;
        display: flex;
        padding: 0;

    }
    .swiper-container {
        width: 100%;
        overflow: hidden;
        height: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .swiper-pagination {
        position: absolute;
        width: 20vw ;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        .swiper-pagination-bullet {
            width: 0.5vw;
            height: 0.5vw;
            border: 0.1vw solid white; 
            border-radius: 50%;
            margin: 0.4vw;
            opacity: 0.5;
            transition: 0.3s;
            cursor: pointer;
        }
        .swiper-pagination-bullet-active {
            transition: 0.3s;
            background: #75dab4;
            opacity: 1 !important;
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        width: 3.5vw;
        height: 3.5vw;
        position: absolute;
        z-index: 10;
        top: 10%;
        border: 0.1vw solid white;
        cursor: pointer;
        font-size: 1vw;
        border-radius: 50%;
        color: white;
        transition: 1s;
    } 
    .swiper-button-prev {
        left: -3.5vw;
        opacity: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        :after {
            content: '⟵';
            position: absolute;

        }
    }
    .swiper-button-next {
        right: -3.5vw;
        opacity: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        :after {
            content: '⟶';
            position: absolute;

        }
    }
`
export default CommentSection
