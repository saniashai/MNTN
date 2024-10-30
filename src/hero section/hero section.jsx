import React from 'react';
import photo1 from './01 (1).png';
import photo2 from './01 (2).png';
import photo3 from './01 (3).png';


const HeroSection = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='container pt-5'>
                    <div className='cols-12'>
                        <div className='row align-items-center'>
                            <div className='col-md-6'>
                                <span className='text-warning'>Get Started</span>
                                <h1 className='text-white'>01 What level of hiker are you?</h1>
                                <p className='text-white'>
                                    Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level
                                    guide will help you plan hikes according to different hike ratings set by various websites like All Trails and
                                    Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                                </p>
                                <span className='text-warning'>Read more 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-3" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </div>
                            <div className='col-md-6 p-5'>
                                <img src={photo1} alt="Description" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container pt-5'>
                    <div className='cols-12'>
                        <div className='row align-items-center'>
                            <div className='col-md-6 p-5'>
                                <img src={photo2} alt="Description" />
                            </div>
                            <div className='col-md-6'>
                                <span className='text-warning'>Hiking Essentials</span>
                                <h1 className='text-white'>Picking the right Hiking Gear!</h1>
                                <p className='text-white'>
                                    Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level
                                    guide will help you plan hikes according to different hike ratings set by various websites like All Trails and
                                    Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                                </p>
                                <span className='text-warning'>Read more
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-3" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container pt-5'>
                    <div className='cols-12'>
                        <div className='row align-items-center'>
                            <div className='col-md-6'>
                                <span className='text-warning'>Where you go is the key</span>
                                <h1 className='text-white'>Understand Your Map & Timing</h1>
                                <p className='text-white'>
                                    To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag.
                                    Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark
                                    is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.
                                </p>
                                <span className='text-warning'>Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-3" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </div>
                            <div className='col-md-6 p-5'>
                                <img src={photo3} alt="Description" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container pt-5'>
                    <div className='cols-12'>
                        <div className='row align-items-center'>
                            <div className='col-md-6'>
                                <h5 className='text-white'>MNTN</h5>
                                <span className='text-white mt-5'>Get out there & discover your next</span>
                                <p className='text-white'>slope, mountain & destination!</p>
                                <h6 className='mt-5 '>Copyright 2023 MNTN, Inc. Terms & Privacy</h6>
                            </div>
                            <div className='col-md-3 p-5'>
                                <h5 className='text-warning'>More on The Blog</h5>
                                <ul className='text-white list-unstyled'>
                                    <li>About MNTN</li>
                                    <li>Contributors & Writers</li>
                                    <li>Write For Us</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className='col-md-3 p-5'>
                                <h5 className='text-warning'>More on MNTN</h5>
                                <ul className='text-white list-unstyled'>
                                    <li>The Team</li>
                                    <li>Jobs</li>
                                    <li>Press</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;




