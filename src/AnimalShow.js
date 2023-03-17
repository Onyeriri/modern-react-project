function AnimalShow() {
  const handleClick = () => {
    console.log("Add animal button was clicked!!!");
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}
export default AnimalShow;
