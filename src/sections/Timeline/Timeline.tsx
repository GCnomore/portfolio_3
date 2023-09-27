import React from 'react';

import * as Styled from './Timeline.styled';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import sun6 from '../../images/sun6.png';
import moon from '../../images/moon.png';

import sky from '../../images/sky.png';
import sky3 from '../../images/sky3.png';

const Timeline = () => {
   return (
      <Styled.Container className='mt-[100vh]'>
         <div className='relative'>
            <h3>2008</h3>
            <p>Graduated from high school</p>
            <p>Working at coffee shop</p>
            <p>Got into CSULB</p>
            <p>Started work at merchant service company</p>

            <h3>2009</h3>
            <p>Working at coffee shop and merchant service company</p>
            <p>Started work at used car dealer</p>
            <p>Dropped CSULB</p>
            <p>Started work at law office as a loan modification operator</p>

            <h3>2011</h3>
            <p>Quit loan modification &#40;end of Lehman bros aftereffects&#41;</p>
            <p>Went back to merchant service company</p>
            <p>Work at restaurant on the weekend</p>

            <h3>2012</h3>
            <p>No apocalypse</p>
            <p>Quit merchant service company</p>
            <p>Started work at apparel company as an accountant</p>

            <h3>2013</h3>
            <p>Started attending community college</p>
            <p>Went back to merchant service company</p>
            
            <h3>2014</h3>
            <p>Dropped college completely</p>
            <p>Quit merchant service completely</p>
            <p>Working at cellphone store and restaurant</p>

            <h3>2015</h3>
            <p>Started work at fashion district</p>

            <h3>2016</h3>
            <p>Promoted to manager position</p>
            <p>Thought it was perfect job</p>

            <h3>2019</h3>
            <p>Random YouTube video caught me on programming</p>
            <p>Started to learn coding</p>

            <h3><FontAwesomeIcon className='mr-2' icon={faStar} />2020</h3>
            <p>Covid pandemic</p>
            <p>Quit everything I was doing and went 100% to learn code</p>
            <p>Turned out the dude from the coffe shop I worked at was 15+ years software engineer</p>
            <p>Dude became my programming mentor</p>
            <p>Attended 8 months coding bootcamp and finished all courses within 3 months</p>
            <p>Joined my mentor's side project</p>
            <p></p>
            <p>Endless resume submission</p>
            <p>Endless resume submission</p>
            <p>Endless resume submission</p>
            <img className='absolute -z-10 w-[80%] max-w-[1600px] top-[10%] left-[10%]' alt='moon' src={moon} />
            <Styled.Sky alt='sun' src={sky3}/>

            <h3>2021</h3>
            <p>Endless resume submission</p>
            <p>Endless resume submission</p>
            <p>Thinking of going back to fashion district...</p>
            <p>Endless resume submission</p>
            <p>Endless resume submission</p>
            <p>Endless resume submission</p>
            <p>Endless resume submission</p>
            <p className='font-bold underline'>First job as front end developer !!</p>

            <h3>2022</h3>
            <p>Second job as a front end developer</p>
            <p>My journey continues...</p>

         </div>

      </Styled.Container>
   )
}

export default Timeline;