import noImageAvailable from "../assets/no-image-available.png";

const CroppedImage = (imageUrl: string) => {
  if (imageUrl === null) return noImageAvailable;
  const index = imageUrl.indexOf("media/") + 6;
  return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
};

export default CroppedImage;
