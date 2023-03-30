import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "jkl",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        "Quibusdam dolores veniam commodi dolor? Consequatur cumque sit adipisci molestiae quibusdam. Blanditiis animi voluptas unde vitae odit nesciunt possimus quaerat in culpa!",
    },
    {
      id: "jklp",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        "Quibusdam dolores veniam commodi dolor? Consequatur cumque sit adipisci molestiae quibusdam. Blanditiis animi voluptas unde vitae odit nesciunt possimus quaerat in culpa!",
    },
    {
      id: "jkld",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        "Quibusdam dolores veniam commodi dolor? Consequatur cumque sit adipisci molestiae quibusdam. Blanditiis animi voluptas unde vitae odit nesciunt possimus quaerat in culpa!",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
