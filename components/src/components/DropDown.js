import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function DropDown({ options }) {
  const [selected, setSelected] = useState(options[0].label);
  const [isOpen, setIsOpen] = useState(false);
  // const [value, setValue] = useState(options[0].value);

  const handleClick = (selectedValue, selectedLabel) => {
    setSelected(selectedLabel);
    // setValue(selectedValue);
    setIsOpen((currentState) => !currentState);
  };

  // console.log(value);

  const icons = (
    <span className="text-3xl">
      {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  const handleOpen = () => {
    setIsOpen((currentState) => !currentState);
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
