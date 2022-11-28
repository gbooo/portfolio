import React from 'react';
import { FcDownload } from 'react-icons/fc';

const Home = ({ onButtonClick }) => {
    return (
        <div className='w-full'>
            <div className="h-[500px] w-full bg-gray-500"></div>
            <div className="w-full px-20 py-10 pb-20">
                <p className='text-start mx-5 mb-10 mt-5 text-3xl font-semibold'><span className='text-[#f85c70]'>My</span> Resume</p>
                <div className="mt-5 flex justify-between ml-6 space-x-10">
                    <div className="w-4/12 border px-5 py-5">
                        <p className='text-start text-2xl font-normal'>Expertise</p>
                        <div className="border-t-2 w-2/12 border-[#f85d70] mt-1"></div>
                        <div className="text-start mt-6 mb-8">
                            <p className='text-[#f85d70] text-3xl font-normal'>Internship - 2021</p>
                            <div className="text-xs mt-2 text-gray-400 font-normal">Full Stack Developer</div>
                            <div className="text-sm text-gray-600 mt-4 font-normal">Intern at <span className='font-bold text-gray-800'> e-Yantra IIT Bombay</span> as the Full Stack Developer. Main role was to develop large scale web application using Php, Laravel framework and MySql DataBase.</div>
                            <div className="flex w-full justify-end">
                                <div onClick={() => onButtonClick('internship.pdf')} className="text-blue-600 text-2xl px-2 py-1 hover:cursor-pointer hover:bg-gray-300 "><FcDownload /> </div>
                            </div>
                        </div>
                        <div className="border-t-2 w-full mr-4 border-gray-200  mt-1"></div>
                        <div className="text-start my-8">
                            <p className='text-[#f85d70] text-2xl font-normal'>Winners of Hackathon (2021)</p>
                            <div className="text-xs mt-2 text-gray-400 font-normal"><a href="http://hackathon.e-yantra.org/result ">Fighting Covid-19 2021 </a></div>
                            <div className="text-sm text-gray-600 mt-4 font-normal">Winners of the National Level Hackathon conducted by<span className='font-bold text-gray-800'> e-Yantra IIT Bombay</span> under best implementation(Web) Fighting Covid-19 Hackathon 2021 </div>
                            <div className="flex w-full justify-end">
                                <div onClick={() => onButtonClick('eyrc.pdf')} className="text-blue-600 text-2xl px-2 py-1 hover:cursor-pointer hover:bg-gray-300 "><FcDownload /> </div>
                            </div>
                        </div>
                    </div>
                    {/* http://hackathon.e-yantra.org/result 
                e-Yantra is a project sponsored by MoE through the National Mission on Education through ICT (NMEICT) */}
                    <div className="w-4/12  border px-5 py-5">
                        <p className='text-start text-2xl font-normal'>Education</p>
                        <div className="border-t-2 w-2/12 border-[#f85d70] mt-1"></div>
                        <div className="text-start mt-6 mb-12">
                            <p className='text-[#f85d70] text-3xl font-normal'>2020 - 2023</p>
                            <div className="text-xs mt-2 text-gray-400 font-normal">B.Tech in Computer Science Engineering</div>
                            <div className="text-sm text-gray-600 mt-4 font-normal">Currently pursing my under graduation from <span className='font-bold text-gray-500'>Gayatri Vidya Parishad College of Engineering (A)</span>from Visakhapatnam , Andhra Pradesh India  with an overall <span className='font-bold'>8.23</span> CGPA.</div>
                        </div>
                        <div className="border-t-2 w-full mr-4 border-gray-200  mt-1"></div>
                        <div className="text-start mt-6 mb-4">
                            <p className='text-[#f85d70] text-3xl font-normal'>2017 - 2020</p>
                            <div className="text-xs mt-2 text-gray-400 font-normal">Diploma in Computer Engineering</div>
                            <div className="text-sm text-gray-600 mt-4 font-normal">I completed my Schooling at <span className='font-bold text-gray-500'>Behara Polytechnic College</span> from Visakhapatnam , Andhra Pradesh India  with an <span className='font-bold'>85.66 </span>%.</div>
                        </div>
                        <div className="border-t-2 w-full mr-4 border-gray-200  mt-1"></div>
                        <div className="text-start mt-6 mb-4">
                            <p className='text-[#f85d70] text-3xl font-normal'>2012 - 2017</p>
                            <div className="text-xs mt-2 text-gray-400 font-normal">High School Degree</div>
                            <div className="text-sm text-gray-600 mt-4 font-normal">I completed my Schooling at <span className='font-bold text-gray-500'>MP & EV EM SCHOOL</span> from Visakhapatnam , Andhra Pradesh India  with an <span className='font-bold'>9.5 </span>CGPA.</div>
                        </div>
                    </div>
                    <div className="w-4/12  border px-5 py-5">
                        <p className='text-start text-2xl font-normal'>Skills</p>
                        <div className="border-t-2 w-2/12 border-[#f85d70] mt-1"></div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>HTML5 & CSS3</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-11/12"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>JavaScript</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-8/12"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>Python</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-10/12"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>Tailwind CSS</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-11/12"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>Django</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-9/12"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>ReactJs</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-10/12"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>SQL</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-10/12"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='text-gray-600 font-sans font-normal text-start my-1'>Laravel</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#f85d70] h-2.5 rounded-full w-6/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex bg-gray-50  border border-gray-300">
                <div className="w-4/12 h-[400px] border-r border-gray-300"></div>
                <div className="w-4/12 h-[400px] border-r border-gray-300"></div>
                <div className="w-4/12 h-[400px] "></div>
            </div>
        </div>
    )
}

export default Home