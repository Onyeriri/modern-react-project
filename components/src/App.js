import Button from "./Button";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello tailwind</h1>
      <div>
        <Button success rounded outline>
          Primary
        </Button>
      </div>
      <div>
        <Button danger outline>
          Secondary
        </Button>
      </div>
      <div>
        <Button warning>Danger</Button>
      </div>
      <div>
        <Button secondary outline>
          Outlined
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Rounded
        </Button>
      </div>
      <div>
        <Button primary>Rounded</Button>
      </div>
    </div>
  );
}

export default App;
