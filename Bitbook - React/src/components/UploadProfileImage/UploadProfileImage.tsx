import React from "react";
import "./UploadProfileImage.css";
import { userService } from "../../service/userService";
import { bufferDecode } from "../../shared/helperFunction";

const displayInput = {
  display: "block",
};

const UploadProfileImage = ({ user }: any) => {
  // const [profilePhoto, setProfilePhoto] = useState();

  const uploadPhoto = (e: any) => {
    const file = e.target.files[0];
    return userService
      .uploadUserImage(user.id, file)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const url = () => {
    if (user && user.avatarUrl) {
      return bufferDecode("image", user.avatarUrl);
    } else {
      return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
    }
  };

  return (
    <>
      <img className="image" src={url()} alt="..." />

      <form className="form">
        <div className="labelWrapper">
          <label htmlFor="contained-button-file" style={{}}>
            Upload Image
          </label>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            style={displayInput}
            onChange={uploadPhoto}
          />
        </div>
      </form>
    </>
  );
};

export default UploadProfileImage;
