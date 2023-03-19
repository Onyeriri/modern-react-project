import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ urls }) {
  const renderedImages = urls.map((url, index) => {
    console.log(url.urls.regular);
    return <ImageShow url={url.urls.regular} key={index} />;
  });

  return <div className="image-list-container">{renderedImages}</div>;
}

export default ImageList;
