import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import User from "./User"
import InfiniteScroll from "./InfiniteScroll"
import { addUsers } from "../../redux/store"

import "../../css/UsersList.css"

const UsersList = () => {
    const [hasMore, setHasMore] = useState(true)

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const onReceiveItems = (receivedUsers, page) => {
        dispatch(addUsers(receivedUsers))
        if (page >= 50000) setHasMore(false)
    }

    return (
        <div className="list-container">
            <InfiniteScroll
                loader={<span>Loading...</span>}
                onReceiveItems={onReceiveItems}
                hasMore={hasMore}
            >
                {users.map(user => <User key={user.id} user={user} />)}
            </InfiniteScroll>
        </div>
    )
}

export default UsersList
