import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function DropDown({ options }) {
  const [selected, setSelected] = useState(options[0].label);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);

  const handleClick = (selectedValue, selectedLabel) => {
    console.log(selectedValue);
    setSelected(selectedLabel);
    setValue(selectedValue);
  };

  const icons = (
    <span className="text-3xl">
      {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const displayOptions = options.map((option, index) => (
    <option
      key={index}
      value={option.value}
      onClick={() => handleClick(option.value, option.label)}
    >
      {option.label}
    </option>
  ));

  return (
    <div>
      <div
        onClick={handleOpen}
        className="p-3 border border-gray-300 bg-gray-300 flex align-center justify-between"
      >
        {selected} {icons}
      </div>
      {isOpen && (
        <div className="p-2 cursor-pointer border border-gray-300">
          {displayOptions}
        </div>
      )}
    </div>
  );
}

export default DropDown;
