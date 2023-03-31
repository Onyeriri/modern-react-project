import { useState } from "react";

function Accordion({ items }) {
  const [show, setShow] = useState(false);
  const showItem = (items) => {
    setShow(!show);
  };
  const renderedContent = items.map((item) => {
    return (
      <div key={item.id} onClick={showItem}>
        <div>{item.title}</div>
        {show && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedContent}</div>;
}

export default Accordion;
