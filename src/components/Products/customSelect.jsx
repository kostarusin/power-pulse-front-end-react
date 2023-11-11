import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const breakpoints = [768, 1440];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default function CustomSelect({ placeholder, minWidth }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div
      className="selector"
      style={{
        minWidth: minWidth,
      }}
    >
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={placeholder}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: '#040404',
            borderRadius: '12px',
            minWidth: '110px',
            borderColor: state.isFocused
              ? '#e6533c'
              : 'rgba(239, 237, 232, 0.3)',
            boxShadow: 'none',
            padding: '5px',
            [mq[0]]: {
              minWidth: '192px',
            },
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: '#1C1C1C',
          }),
          menuList: (base) => ({
            ...base,
            backgroundColor: '#1C1C1C',
            borderRadius: '12px',
            padding: '14px 32px 14px 14px',
            gap: '10px',
          }),

          placeholder: (base) => ({
            ...base,
            color: 'white',
          }),
          indicatorContainer: (base) => ({
            ...base,
            color: '#EFEDE8',
          }),
          singleValue: (base) => ({
            ...base,
            color: '#EFEDE8',
          }),
          indicatorSeparator: (base) => ({
            ...base,
            display: 'none',
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: '12px',
          colors: {
            ...theme.colors,
            primary25: 'black',
          },
        })}
      />
    </div>
  );
}
