import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");

  const calculateTip = (tipValue = tipPercentage) => {
    const billValue = parseFloat(bill);
    const tip = parseFloat(tipValue);
    const peopleValue = parseInt(numberOfPeople);

    if (!billValue || !tip || !peopleValue || peopleValue <= 0) return;

    const tipAmount = (billValue * (tip / 100)) / peopleValue;
    const total = (billValue + billValue * (tip / 100)) / peopleValue;

    setTipAmount(tipAmount.toFixed(2));
    setTotalPerPerson(total.toFixed(2));
  };

  const resetCalculator = () => {
    setBill('');
    setTipPercentage('');
    setNumberOfPeople('');
    setTipAmount(0);
    setTotalPerPerson(0);
  };

  const setTipAndCalculate = (percentage) => {
    setTipPercentage(percentage);
    calculateTip(percentage);
  };

  return (
    <div className='bg-[#C5E4E7]'>
      <h1 className='text-center mt-24 text-[#3D6263] uppercase font-bold -tracking-tighter'>
        S p l i <br />t t e r
      </h1>
      <div className="h-[400px] w-[700px] bg-white rounded-3xl mt-10 mx-auto flex">

        <div className="bg-transparent p-8 rounded-lg w-[450px] ">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Bill</label>
            <input
              type="number"
              placeholder="0"
              value={bill}
              onChange={(evt) => setBill(evt.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
            <label className="block text-gray-700 text-sm font-bold mb-2"> Select Tip% </label>

          <div className="mb-4 flex-wrap">

            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={() => setTipAndCalculate(5)}
                className="bg-[#00474B] text-white py-3- px-7 rounded-lg font-black hover:bg-[#21B19B] "
              >
                5%
              </button>
              <button
                onClick={() => setTipAndCalculate(10)}
                 className="bg-[#00474B] text-white py-3- px-7 rounded-lg font-black hover:bg-[#21B19B] "
              >
                10%
              </button>
              <button
                onClick={() => setTipAndCalculate(15)}
                  className="bg-[#00474B] text-white py-3- px-7 rounded-lg font-black hover:bg-[#21B19B] "
              >
                15%
              </button>
              <button
                onClick={() => setTipAndCalculate(25)}
                  className="bg-[#00474B] text-white py-3- px-7 rounded-lg font-black hover:bg-[#21B19B] "
              >
                25%
              </button>
              <button
                onClick={() => setTipAndCalculate(50)}
                  className="bg-[#00474B] text-white py-3- px-7 rounded-lg font-black hover:bg-[#21B19B] "
              >
                50%
              </button>
              <input
              type="number"
              placeholder="Custom"
              value={tipPercentage}
              onChange={(evt) => setTipPercentage(evt.target.value)}
              className=" bg-[#F3F8FB] text-white py-3- px-7 rounded-lg font-black"
            />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Number of People</label>
            <input
              type="number"
              placeholder="Custom"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-[#00474B] m-6 w-96 rounded-lg p-6  flex flex-col  gap-12">
 <div className='flex justify-between' >
 <div> <p  className="text-lg text-white ">Tip Amount</p>
  <p className='text-[#679DA2]' >/person</p></div>
  <div>
  <p className="font-black text-5xl text-[#21B19B]">${tipAmount}</p>
  </div>
 </div>

 <div className='flex justify-between' >
 <div> <p  className="text-lg text-white ">Total</p>
  <p className='text-[#679DA2]'>/person</p></div>
<div>
<p className="font-black text-5xl text-[#21B19B]">${totalPerPerson}</p>
</div>
 </div>


          <div className='flex space-x-4 mt-4'>
            <button
              onClick={calculateTip}
              className="bg-[#25C2AD] text-white py-2 px-4 rounded-lg"
            >
              Calculate
            </button>
            <button
              onClick={resetCalculator}
              className="bg-[#25C2AD] text-white py-2 px-4 rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
