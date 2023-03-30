import Button from "../components/Button";
import {
  FaAirbnb,
  FaAffiliatetheme,
  FaAlgolia,
  FaBattleNet,
  FaBuffer,
  FaCottonBureau,
  FaDelicious,
} from "react-icons/fa";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!!!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello tailwind</h1>
      <div>
        <Button className="mb-5" onClick={handleClick} success rounded outline>
          <FaAirbnb />
          Success outline rounded
        </Button>
      </div>
      <div>
        <Button className="mb-5" danger>
          <FaAffiliatetheme />
          Danger outline
        </Button>
      </div>
      <div>
        <Button warning>
          <FaAlgolia />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          <FaBattleNet />
          secondary rounded outline
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <FaBuffer />
          secondary rounded
        </Button>
      </div>
      <div>
        <Button primary outline>
          <FaCottonBureau />
          primary button
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <FaDelicious />
          primary button
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
