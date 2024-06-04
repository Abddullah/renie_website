import React from 'react';
import HubImg from '../../../assets/images/hubImg-1.png';
function RenieHub() {
  return (
    <div className='w-11/12 contentSection md:w-10/12  my-5  flex flex-col items-center md:flex-row md:gap-10 justify-center md:justify-between  mx-auto '>
      {' '}
      <div className='rewardImageSection'>
        <img className='rewardImg' src={HubImg} alt='about image' />
      </div>
      <div className='w-10/12  md:w-6/12  p-4 flex flex-col justify-center gap-5 '>
        <div className='aboutTitleSection text-center md:text-left'>
          <span className='renieTitleText font-bold gradient-text'>
            Renie Hub
          </span>{' '}
          <br />
          <span className='rewardTitleMain font-semibold gradient-text'>
            One Network to Integrate Them All
          </span>
        </div>
        <div>
          <p className='aboutPeragraph font-normal text-center  md:text-justify'>
            Renie hub provides real-time data for smarter logistic decisions and
            an overview of data driven income.
          </p>
        </div>
        <span className='reniebigImgText font-semibold text-center md:text-left'>
          Learn more {'>'}{' '}
        </span>
        {/* <div className='arrowSection relative w-full flex mx-10  hidden md:flex px-10 '>
          <img className='arrowImg absolute top-6' src={Arrow} alt='' />
        </div> */}
      </div>
    </div>
  );
}

export default RenieHub;
