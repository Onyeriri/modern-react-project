import { useState } from "react";

function Accordion({ items }) {
  const [expanded, setExpanded] = useState("jkl");
  // const [collapsed, setCollapsed] = useState(true);

  const handleClick = (id) => {
    setExpanded(id);
  };

  const renderedContent = items.map((item) => {
    const isExpanded = item.id === expanded;
    // let isCollapsed = index !== expanded;

    // if (index === expanded) {
    //   console.log("expand");
    // } else {
    //   console.log("collapse");
    // }

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(item.id)}>{item.title}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedContent}</div>;
}

export default Accordion;
