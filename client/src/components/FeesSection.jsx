import { DollarSign, Percent } from 'lucide-react';

const STATE_TAX_RATES = {
  'AL': 0.04, 'AK': 0.00, 'AZ': 0.056, 'AR': 0.065, 'CA': 0.0725,
  'CO': 0.029, 'CT': 0.0635, 'DE': 0.00, 'FL': 0.06, 'GA': 0.04,
  'HI': 0.04, 'ID': 0.06, 'IL': 0.0625, 'IN': 0.07, 'IA': 0.06,
  'KS': 0.065, 'KY': 0.06, 'LA': 0.045, 'ME': 0.055, 'MD': 0.06,
  'MA': 0.0625, 'MI': 0.06, 'MN': 0.06875, 'MS': 0.07, 'MO': 0.0725,
  'MT': 0.00, 'NE': 0.055, 'NV': 0.0685, 'NH': 0.00, 'NJ': 0.06625,
  'NM': 0.0825, 'NY': 0.04, 'NC': 0.045, 'ND': 0.05, 'OH': 0.0575,
  'OK': 0.045, 'OR': 0.00, 'PA': 0.06, 'RI': 0.07, 'SC': 0.05,
  'SD': 0.045, 'TN': 0.0945, 'TX': 0.0625, 'UT': 0.0595, 'VT': 0.06,
  'VA': 0.0525, 'WA': 0.065, 'WV': 0.06, 'WI': 0.05, 'WY': 0.04,
};

export function FeesSection({
  taxRate,
  docFee,
  registrationFee,
  destinationCharge,
  selectedState,
  onInputChange
}) {
  const handleStateChange = (e) => {
    const state = e.target.value;
    onInputChange('selectedState', state);
    onInputChange('taxRate', STATE_TAX_RATES[state] || 0.07);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">State for Sales Tax</label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          >
            {Object.keys(STATE_TAX_RATES).map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Sales Tax Rate</label>
          <div className="relative">
            <Percent className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={taxRate}
              onChange={(e) => onInputChange('taxRate', parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
              step="0.001"
              placeholder="0.07"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Doc Fee</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={docFee === 0 ? '' : docFee}
              onChange={(e) => onInputChange('docFee', parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
              placeholder="200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Registration Fee</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={registrationFee === 0 ? '' : registrationFee}
              onChange={(e) => onInputChange('registrationFee', parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
              placeholder="150"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Destination Charge</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={destinationCharge === 0 ? '' : destinationCharge}
              onChange={(e) => onInputChange('destinationCharge', parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
              placeholder="1200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
