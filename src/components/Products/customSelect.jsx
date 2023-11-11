import { useState } from 'react';
import Select from 'react-select';
import {
  black,
  blackLight,
  grayMiddle,
  orangeDark,
  white,
} from '../Helpers/helpers';

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
            backgroundColor: black,
            borderRadius: '12px',
            minWidth: '110px',
            borderColor: state.isFocused ? orangeDark : grayMiddle,
            boxShadow: 'none',
            padding: '5px',
            [mq[0]]: {
              minWidth: '192px',
            },
            [mq[1]]: {
              backgroundColor: 'inherit',
            },
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: blackLight,
          }),
          menuList: (base) => ({
            ...base,
            backgroundColor: blackLight,
            borderRadius: '12px',
            padding: '14px 32px 14px 14px',
            gap: '10px',
            [mq[1]]: {
              opacity: '50%',
            },
          }),

          placeholder: (base) => ({
            ...base,
            color: white,
          }),
          indicatorContainer: (base) => ({
            ...base,
            color: white,
          }),
          singleValue: (base) => ({
            ...base,
            color: white,
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
            primary25: black,
          },
        })}
      />
    </div>
  );
}
