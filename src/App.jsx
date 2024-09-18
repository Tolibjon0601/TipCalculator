import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

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

        <div className="bg-transparent p-8 rounded-lg max-w-sm w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Bill Amount</label>
            <input
              type="number"
              placeholder="Enter bill amount"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tip Percentage</label>
            <input
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage}
              onChange={(e) => setTipPercentage(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => setTipAndCalculate(5)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                5%
              </button>
              <button
                onClick={() => setTipAndCalculate(10)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                10%
              </button>
              <button
                onClick={() => setTipAndCalculate(15)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                15%
              </button>
              <button
                onClick={() => setTipAndCalculate(25)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                25%
              </button>
              <button
                onClick={() => setTipAndCalculate(50)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                50%
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Number of People</label>
            <input
              type="number"
              placeholder="Enter number of people"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-[#00474B] m-6 w-80 rounded-lg p-6">
          <p className="text-lg text-white">Tip Amount per Person: <span className="font-semibold">${tipAmount}</span></p>
          <p className="text-lg text-white">Total per Person: <span className="font-semibold">${totalPerPerson}</span></p>
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
