import styled from '@emotion/styled'
import InfoNum from './InfoNum'

function IntroVideoSection() {
    const infoNums = [
        {
            src: 'smile.png',
            num: '2400',
            text: 'Happy Clints'
        },
        {
            src: 'briefcase.png',
            num: '133',
            text: 'Complete Projects'
        },        {
            src: 'cloud-computing.png',
            num: '254k',
            text: 'Files Downloaded'
        },
        {
            src: 'badge.png',
            num: '46',
            text: 'Award Win'
        }
    ] 

      return (
        <IntroVideoSectionStyled>
            <div className='background'>
                <span className='inner-background'></span>
            </div>
            <div className='infoNumsContainer'>
                {infoNums.map(info => 
                    <InfoNum 
                        src={info.src} 
                        num={info.num} 
                        text={info.text}
                    />
                )}
            </div>
            <video  poster="https://today.duke.edu/sites/default/files/styles/story_hero/public/coding_HERO.jpg?itok=F8YWeHdH"
              width='500' height='400' >
                Sorry, your browser doesn't support embedded videos.
            </video>
        </IntroVideoSectionStyled>
    )
}   

const IntroVideoSectionStyled = styled.div`
@media only screen and (orientation:portrait) {
    width: 95% !important;
    .infoNumsContainer {
        flex-direction: column;
    }
    video {
        width: 100% !important;
        height: 40vh !important;
        border-radius: 2vh !important;
    }
}
    width: 80%;
    margin: 8vw auto;
    display: flex;
    flex-direction: column;
    position: relative;

    .background {
        position: relative;
        width: 100%;    
        height: 100%;
        overflow-x: hidden;
    }
    .inner-background {
        position: absolute;
        left: -35%;
        top: -10%;
        width: 120vw;
        height: 100%;
        z-index: -1;
        background: #11141b;
    }
    .infoNumsContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    video {
        align-self: center;
        background: #76dbb5;
        position: relative;
        width: 70%;
        height: 35vw;
        margin: 3vw;
        top: 5vw;
        border-radius: 0.3vw;
        box-shadow: 0px 2vw 2.5vw 3vw rgba(52,60,70,0.1);
        object-fit: cover;
    }
`
export default IntroVideoSection
