import "./styles.css";
import { profileData } from "./data";

function ProfileCard(){
    return <div class = "profile-card-wrapper">
        <img src={profileData.profile_img}/>
        <h3>Name: {profileData.name}</h3>
        <div>Career: {profileData.carreer}</div>
        <div>Hobby: {profileData.hobby}</div>
    </div>
}

export default ProfileCard;