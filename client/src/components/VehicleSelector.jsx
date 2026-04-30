import { useEffect, useState } from 'react';

export function VehicleSelector({ onVehicleChange, selectedMake, selectedModel, selectedYear, selectedTrim }) {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [trims, setTrims] = useState([]);
  const [loadingMakes, setLoadingMakes] = useState(true);
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingYears, setLoadingYears] = useState(false);
  const [loadingTrims, setLoadingTrims] = useState(false);

  // Fetch makes on component mount
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const res = await fetch('/api/makes');
        const data = await res.json();
        setMakes(data);
        setLoadingMakes(false);
      } catch (error) {
        console.error('Error fetching makes:', error);
        setLoadingMakes(false);
      }
    };
    fetchMakes();
  }, []);

  // Fetch models when make changes
  useEffect(() => {
    if (!selectedMake) {
      setModels([]);
      setYears([]);
      return;
    }

    const fetchModels = async () => {
      setLoadingModels(true);
      try {
        const res = await fetch(`/api/models/${selectedMake}`);
        const data = await res.json();
        setModels(data);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
      setLoadingModels(false);
    };
    fetchModels();
  }, [selectedMake]);

  // Fetch years when model changes
  useEffect(() => {
    if (!selectedMake || !selectedModel) {
      setYears([]);
      setTrims([]);
      return;
    }

    const fetchYears = async () => {
      setLoadingYears(true);
      try {
        const res = await fetch(`/api/years/${selectedMake}/${selectedModel}`);
        const data = await res.json();
        setYears(data);
      } catch (error) {
        console.error('Error fetching years:', error);
        // Fallback to 2015-2026 if API fails
        const fallbackYears = [];
        for (let i = 2026; i >= 2015; i--) {
          fallbackYears.push(i);
        }
        setYears(fallbackYears);
      }
      setLoadingYears(false);
    };
    fetchYears();
  }, [selectedMake, selectedModel]);

  // Fetch trims when year changes
  useEffect(() => {
    if (!selectedMake || !selectedModel || !selectedYear) {
      setTrims([]);
      return;
    }

    const fetchTrims = async () => {
      setLoadingTrims(true);
      try {
        const res = await fetch(`/api/trims/${selectedMake}/${selectedModel}/${selectedYear}`);
        const data = await res.json();
        setTrims(data);
      } catch (error) {
        console.error('Error fetching trims:', error);
        setTrims([]);
      }
      setLoadingTrims(false);
    };
    fetchTrims();
  }, [selectedMake, selectedModel, selectedYear]);

  const handleMakeChange = (e) => {
    const make = e.target.value;
    onVehicleChange({ make, model: '', year: '', trim: '' });
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    onVehicleChange({ make: selectedMake, model, year: '', trim: '' });
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    onVehicleChange({ make: selectedMake, model: selectedModel, year, trim: '' });
  };

  const handleTrimChange = (e) => {
    const trim = e.target.value;
    onVehicleChange({ make: selectedMake, model: selectedModel, year: selectedYear, trim });
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="premium-label">Make</label>
          <select
            value={selectedMake}
            onChange={handleMakeChange}
            disabled={loadingMakes}
            className="premium-input bg-slate-950/50"
          >
            <option value="">Select a make...</option>
            {makes.map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="premium-label">Model</label>
          <select
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!selectedMake || loadingModels}
            className="premium-input bg-slate-950/50"
          >
            <option value="">Select a model...</option>
            {models.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="premium-label">Year</label>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            disabled={!selectedModel || loadingYears}
            className="premium-input bg-slate-950/50"
          >
            <option value="">
              {loadingYears ? 'Loading years...' : 'Select a year...'}
            </option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="premium-label">Trim / Edition</label>
          <select
            value={selectedTrim}
            onChange={handleTrimChange}
            disabled={!selectedYear || loadingTrims}
            className="premium-input bg-slate-950/50 border-blue-500/30"
          >
            <option value="">
              {loadingTrims ? 'Loading trims...' : 'Select a trim...'}
            </option>
            {trims.map(trim => (
              <option key={trim.trim} value={trim.trim}>{trim.trim} - {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(trim.msrp)}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
