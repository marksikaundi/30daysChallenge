import React from 'react';

function Main() {
  return (
    <main className="container mx-auto py-8">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold mb-8">Welcome to Lendbox</h1>
        <p className="text-gray-600 text-lg mb-8 text-center max-w-lg">The easiest way to borrow and lend money online.</p>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mb-8">Learn More</a>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4">
            <div className="bg-blue-500 text-white rounded-full h-20 w-20 flex justify-center items-center mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Search</h3>
            <p className="text-gray-600 text-sm text-center max-w-xs">Find the best loan or investment opportunities for you.</p>
          </div>
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4">
            <div className="bg-blue-500 text-white rounded-full h-20 w-20 flex justify-center items-center mb-4">
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Invest</h3>
            <p className="text-gray-600 text-sm text-center max-w-xs">Grow your money by investing in other people's loans.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white rounded-full h-20 w-20 flex justify-center items-center mb-4">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Borrow</h3>
            <p className="text-gray-600 text-sm text-center max-w-xs">Get the money you need quickly and easily.</p>
          </div>
        </div>
        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Get Started</a>
      </div>
    </main>
  );
}

export default Main;