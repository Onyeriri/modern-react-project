import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success danger rounded outline>
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
