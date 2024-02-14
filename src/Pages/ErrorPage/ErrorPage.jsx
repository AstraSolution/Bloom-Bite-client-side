import React from 'react';
import Error from '../../Components/Error/Error';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <section className='min-h-screen flex flex-col lg:flex-row items-center justify-center  gap-5 font-primary container mx-auto' >
                <div className='text-center lg:text-left lg:ml-40  lg:flex-1 space-y-4 md:spacey-y-6 '>
                    <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>OPPS... You're Lost</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9">Uh oh, we can't seem to find the page you're looking for. <br />Try goring back to page or contact us for more information.</p>
                    <button>
                        <a href="#" title="Get quote now"
                            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">Get it now
                        </a>
                    </button>
                </div>
                <div className='w-full lg:flex-1'>
                    <img className='w-10/12 mx-auto' src="https://i.ibb.co/9W2wbFp/ezgif-4-226bcf1e79.gif" alt="" />
                </div>
            </section>
        </>
    );
};

export default ErrorPage;