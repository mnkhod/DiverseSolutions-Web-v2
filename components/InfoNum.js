import styled from '@emotion/styled'

function InfoNum({src, num, text}) {

      return (
        <InfoNumStyled>
           <img src={src} alt={src}/>
           <p className='num'>{num}</p>
           <p>{text}</p>
        </InfoNumStyled>
    )
}   

const InfoNumStyled = styled.div`
@media only screen and (orientation:portrait) {
    width: 100% !important;
    p {
        font-size: 3vh !important;
    }
    img {
        width: 7vh !important;
    }
    margin: 2vh 0!important;
}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    p {
        font-weight: 300;
        letter-spacing: 0.2vw;
        margin: 0.6vw;
    }
    .num {
        font-size: 2vw;
    }
    img {
        position: absolute;
        opacity: 0.1;
        width: 4.5vw;
    }
    border-right: 0.1vw solid #76dbb5;

`
export default InfoNum