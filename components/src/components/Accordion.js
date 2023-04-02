import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expanded, setExpanded] = useState(items[0].id);

  const renderedContent = items.map((item) => {
    const isExpanded = item.id === expanded;
    const icons = (
      <span className="text-3xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id} className="border">
        <div
          className="border border-3 p-3 flex justify-between align-center bg-gray-50 items-center"
          onClick={() => {
            if (isExpanded) {
              setExpanded(-1);
            } else {
              setExpanded(item.id);
            }
          }}
        >
          {item.title} {icons}
        </div>
        {isExpanded && (
          <div className="border border-3 p-3">{item.content}</div>
        )}
      </div>
    );
  });

  return <div>{renderedContent}</div>;
}

export default Accordion;
