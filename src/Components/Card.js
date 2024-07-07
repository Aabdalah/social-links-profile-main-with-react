import ProfilePic from "./Profilepic";
import Description from "./Description";
import SocialBox from "./SocialBox";


function Card(props){
    return(
        <div className = "card">
            <ProfilePic url = {props["data"][0]}/>
            <Description data = {props["data"][1]}/>
            <SocialBox data = {props["data"][2]}/>
        </div>
    )
}
export default Card