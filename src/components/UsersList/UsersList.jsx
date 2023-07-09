import { useState } from "react"
import User from "./User"
import "../../css/UsersList.css"
import InfiniteScroll from "./InfiniteScroll"
import { useDispatch, useSelector } from "react-redux"
import { addUsers } from "../../redux/store"

const UsersList = ({ onUserClick }) => {
    const [hasMore, setHasMore] = useState(true)

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const onReceiveItems = (receivedUsers, page) => {
        dispatch(addUsers(receivedUsers))

        if (page >= 5) {
            setHasMore(false)
        }
    }

    return (
        <div className="list-container">
            <InfiniteScroll
                loader={<span>Loading...</span>}
                onReceiveItems={onReceiveItems}
                hasMore={hasMore}
            >
                { users.map(user => <User key={user.id} user={user} onUserClick={onUserClick}/>) }
            </InfiniteScroll>
        </div >
    )
}

export default UsersList