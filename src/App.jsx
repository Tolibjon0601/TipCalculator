import { useState } from 'react'
import './App.css'

function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const calculateTip = () => {
    const billValue = parseFloat(bill);
    const tipValue = parseFloat(tipPercentage);
    const peopleValue = parseInt(numberOfPeople);

    if (!billValue || !tipValue || !peopleValue || peopleValue <= 0) return;

    const tip = (billValue * (tipValue / 100)) / peopleValue;
    const total = (billValue + billValue * (tipValue / 100)) / peopleValue;

    setTipAmount(tip.toFixed(2));
    setTotalPerPerson(total.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Tip Calculator</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Bill </label>
          <input
            type="number"

            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select Tip%</label>
          <input
            type="number"

            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Number of People</label>
          <input
            type="number"

            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={calculateTip}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg transition-all"
        >
          Calculate
        </button>

        <div className="mt-6 ">
          <p className="text-lg">Tip Amount : <span className="font-semibold">${tipAmount}</span></p>
          <p className="text-lg">Total : <span className="font-semibold">${totalPerPerson}</span></p>
        </div>
      </div>
    </div>
  );
}
export default App;
