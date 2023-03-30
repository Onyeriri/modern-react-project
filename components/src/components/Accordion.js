import { useState } from "react";

function Accordion({ items }) {
  const [show, setShow] = useState(false);
  const showItem = (item) => {
    console.log(item.id);
  };
  const renderedContent = items.map((item) => {
    return (
      <div onClick={() => showItem(item)} key={item.id}>
        <div>{item.title}</div>
        {show && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedContent}</div>;
}

export default Accordion;
