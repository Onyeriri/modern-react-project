import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
  // const [selected, setSelected] = useState(options[0].label);
  const [isOpen, setIsOpen] = useState(false);
  // const [value, setValue] = useState(options[0].value);

  const handleClick = (selectedValue) => {
    onChange(selectedValue);
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
      onClick={() => handleClick(option.value)}
    >
      {option.label}
    </option>
  ));

  let content = value || <div>Select...</div>;

  return (
    <div>
      <Panel
        onClick={handleOpen}
        className="p-3 border border-gray-300 bg-gray-300 flex align-center justify-between"
      >
        {content} {icons}
      </Panel>
      {isOpen && (
        <Panel className="p-2 cursor-pointer border border-gray-300">
          {displayOptions}
        </Panel>
      )}
    </div>
  );
}

export default DropDown;
