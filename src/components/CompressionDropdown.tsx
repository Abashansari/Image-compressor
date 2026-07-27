import { ChevronDown } from 'lucide-react';

interface CompressionDropdownProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const options = [
  { label: '50% (High Quality)', value: 0.50 },
  { label: '30% (Balanced)', value: 0.30 },
  { label: '25% (Recommended)', value: 0.25 },
  { label: '10% (Low Quality)', value: 0.10 },
  { label: '5% (Maximum Compression)', value: 0.05 },
];

export const CompressionDropdown = ({ value, onChange, disabled }: CompressionDropdownProps) => {
  return (
    <div className="w-full relative">
      <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
        Compression Level
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          disabled={disabled}
          className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-800 py-3 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all disabled:opacity-50 cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};
