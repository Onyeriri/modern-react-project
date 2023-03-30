import Button from "./Button";
import { FaAirbnb } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello tailwind</h1>
      <div>
        <Button success outline rounded>
          <FaAirbnb />
          Success outline rounded
        </Button>
      </div>
      <div>
        <Button danger>Danger outline</Button>
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
        <Button primary outline>
          primary button
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          primary button
        </Button>
      </div>
    </div>
  );
}

export default App;
