import React, {useState} from "react";
import "./UploadProfileImage.css";
import { userService } from "../../service/userService";
import { bufferDecode } from "../../shared/helperFunction";

const UploadProfileImage = ({ user }: any) => {
  const [profilePhoto, setProfilePhoto] = useState(user?.avatarUrl);

  const uploadPhoto = (e: any) => {
    const file = e.target.files[0];
    return userService
      .uploadUserImage(user.id, file)
      .then((data) => setProfilePhoto(data))
      .catch((e) => console.log(e));
  };

  const imageUrl = () => {
    if (user && profilePhoto) {
      return bufferDecode("image", user.avatarUrl);
    } else {
      return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
    }
  };

  return (
    <>
      <img className="image" src={imageUrl()} alt="..." />
      <form className="form">
        <div className="labelWrapper">
          <label htmlFor="contained-button-file">
            Upload Image
          </label>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            style={{ display: "block" }}
            onChange={uploadPhoto}
          />
        </div>
      </form>
    </>
  );
};

export default UploadProfileImage;
