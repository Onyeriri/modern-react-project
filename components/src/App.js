import Button from "./Button";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello tailwind</h1>
      <div>
        <Button success rounded outline>
          Success rounded outline
        </Button>
      </div>
      <div>
        <Button danger outline>
          Danger outline
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button secondary outline>
          secondary outline
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          secondary rounded
        </Button>
      </div>
      <div>
        <Button primary>primary button</Button>
      </div>
    </div>
  );
}

export default App;
