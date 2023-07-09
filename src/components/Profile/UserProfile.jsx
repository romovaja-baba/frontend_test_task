import { useEffect } from "react"
import "../../css/UserProfile.css"
import UserEditInfo from "./UserEditInfo"

const UserProfile = ({ user, submitUser }) => {

    if (!user) return null

    return (
        <div className="profile-container">
            <div className="profile--title">
                <div className="profile--title--text">{user.firstName} {user.lastName}</div>
            </div>
            <div className="profile--content">
                <div className="profile--content--picture">
                    <img src={user.picture || "http://localhost:3000/gray_default.svg"} 
                    alt="" height={"130px"} width={"130px"} />
                </div>
                <UserEditInfo key={user.id} user={user} submitUser={submitUser} />
            </div>
        </div>
    )
}

export default UserProfile