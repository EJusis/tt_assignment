import React from 'react';
import Select from 'react-select'

const StyledSelect = ({ changeValue }) => {
    const handleChange = (value) => {
        changeValue(value.value)
    }

    const options = [
        {value: 'food', label: 'Food'},
        {value: 'houseware', label: 'Houseware'},
        {value: 'entertainment', label: 'Entertainment'}
    ]

    const colorStyles = {
        control: (provided) => ({
            ...provided,
            border: 0,
            boxShadow: 'none',
            height: '40px'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#F0A023' : '#fff',
            color: '#52526A',
            fontSize: '16px',
            lineHeight: '26px',
            '&:active': {
                backgroundColor: '#F0A023',
            },
        }),
        menu: (provided) => ({
            ...provided,
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
        }),
        singleValue: (provided) => ({
            ...provided, color: '#52526A'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#F0A023',
            '&:hover': {
                color: '#F0A023',
            }
        }),
        indicatorSeparator: (styles) => ({
            display: 'none'
        })
    }

    return (
        <Select
            options={options}
            styles={colorStyles}
            placeholder={null}
            onChange={handleChange}
        />
    );
};

export default StyledSelect;