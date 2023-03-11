import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green font-bold p-2">
          GROWING WITH QUANTUM COMPUTING
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold">
          Research, Innovation for Big data
        </p>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold"
          strings={['JS', 'DevOP', 'ML']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
