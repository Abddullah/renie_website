import React from 'react';
import blackImg from '../../../assets/images/black-img.png';
import ArrowImg from '../../../assets/images/arrowIcon.png';
import binBigImg from '../../../assets/images/bin-1.webp';
import { Link } from 'react-router-dom';
function TellStory() {
  return (
    <div className='w-11/12 contentSection flex flex-col gap-5 md:w-10/12 mx-auto '>
      <div className='flex md:flex-col flex-col-reverse items-center  justify-center md:justify-between'>
        <div className='renieTitleSection my-5 text-center '>
          <span className='tellStoryTitle font-bold  '>Tell your story</span>{' '}
          <br />
          <span className='tellStorySubTitle font-semibold gradient-text'>
            Our bin is your brand’s canvas
          </span>
        </div>
        <div className='tellImagesSection relative flex md:flex-row flex-col justify-center items-center  w-full '>
          <div className='blackImage md:w-auto w-11/12 '>
            <img className='blackBottle' src={blackImg} alt='' />
          </div>
          <div className='arrowImage  '>
            <img className='horizentalArrow' src={ArrowImg} alt='' />
          </div>
          <div className='pinkImage md:w-auto w-11/12 '>
            <img className='pinkBottle' src={binBigImg} alt='' />
          </div>
        </div>
      </div>
      <div className='buttonSection flex justify-center gap-10'>

        <Link to="/renieapp">
          <span className='redLink font=semibold'>Learn more {'>'}</span>
        </Link>
        {/* <span className='blueLink font=semibold'>Contact us {'>'}</span> */}
      </div>
    </div>
  );
}

export default TellStory;
