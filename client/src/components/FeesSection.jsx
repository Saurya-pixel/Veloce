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
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="premium-label">State Tax Location</label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="premium-input bg-black/50"
          >
            {Object.keys(STATE_TAX_RATES).map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="premium-label">Combined Rate</label>
          <div className="relative group">
            <Percent className="absolute left-3 top-3 w-4 h-4 text-zinc-500 group-focus-within:text-gold-500 transition-colors" />
            <input
              type="number"
              value={taxRate}
              onChange={(e) => onInputChange('taxRate', parseFloat(e.target.value) || 0)}
              className="premium-input pl-9"
              step="0.001"
              placeholder="0.07"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="premium-label">Doc Fee</label>
          <div className="relative group">
            <DollarSign className="absolute left-3 top-3 w-4 h-4 text-zinc-500 group-focus-within:text-gold-500 transition-colors" />
            <input
              type="number"
              value={docFee === 0 ? '' : docFee}
              onChange={(e) => onInputChange('docFee', parseFloat(e.target.value) || 0)}
              className="premium-input pl-9 text-xs"
              placeholder="200"
            />
          </div>
        </div>

        <div>
          <label className="premium-label">Reg Fee</label>
          <div className="relative group">
            <DollarSign className="absolute left-3 top-3 w-4 h-4 text-zinc-500 group-focus-within:text-gold-500 transition-colors" />
            <input
              type="number"
              value={registrationFee === 0 ? '' : registrationFee}
              onChange={(e) => onInputChange('registrationFee', parseFloat(e.target.value) || 0)}
              className="premium-input pl-9 text-xs"
              placeholder="150"
            />
          </div>
        </div>

        <div>
          <label className="premium-label">Destination</label>
          <div className="relative group">
            <DollarSign className="absolute left-3 top-3 w-4 h-4 text-zinc-500 group-focus-within:text-gold-500 transition-colors" />
            <input
              type="number"
              value={destinationCharge === 0 ? '' : destinationCharge}
              onChange={(e) => onInputChange('destinationCharge', parseFloat(e.target.value) || 0)}
              className="premium-input pl-9 text-xs"
              placeholder="1200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
