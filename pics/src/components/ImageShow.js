import "./ImageShow.css";

function ImageShow({ url }) {
  return (
    <div className="image-container">
      <img className="image-size" src={url} alt="unsplash images" />
    </div>
  );
}

export default ImageShow;
