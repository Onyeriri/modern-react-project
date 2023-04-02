import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expanded, setExpanded] = useState("jkl");

  const renderedContent = items.map((item) => {
    const isExpanded = item.id === expanded;
    const icons = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;

    return (
      <div key={item.id}>
        <div onClick={() => setExpanded(item.id)}>
          {icons}
          {item.title}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedContent}</div>;
}

export default Accordion;
