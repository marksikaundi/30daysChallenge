import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="max-w[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Finance</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          velit, ea dolor mollitia id, expedita animi repellendus ducimus eos
          quidem iste? Soluta omnis nobis illo optio pariatur assumenda est
          quisquam?
        </p>
        <div className="flex justify-between md:w-[78%] my-6">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 flex justify-between">
        <div>
            <h6 className='font-medium text-gray-400'>Solution</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Insight</li>
          </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API status</li>
          </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Forum</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claims</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
            <li className='py-2 text-sm'>Courses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
