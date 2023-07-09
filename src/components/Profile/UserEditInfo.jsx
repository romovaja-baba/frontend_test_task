import { useState } from "react"

const UserEditInfo = ({ user, submitUser }) => {
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [age, setAge] = useState(user.age)
    const [email, setEmail] = useState(user.email)

    const handleSubmit = (e) => {
        e.preventDefault()

        let submittedUser = {
            id: user.id, firstName: firstName, lastName: lastName, age: age, email: email
        }

        submitUser(submittedUser)
    }
    return (
        <form className="profile-edit-container" onSubmit={handleSubmit}>
            <div className="profile--content--info">
                <div className="profile--content--info--elem">
                    <label className="profile--content--info--elem--title" htmlFor="id-input">ID</label>
                    <input className="profile--content--info--elem--text" id="id-input" value={user.id} disabled></input>
                </div>
                <div className="profile--content--info--elem">
                    <label className="profile--content--info--elem--title" htmlFor="firstName-input">Имя</label>
                    <input className="profile--content--info--elem--text" id="firstName-input"
                        value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                </div>
                <div className="profile--content--info--elem">
                    <label className="profile--content--info--elem--title" htmlFor="lastName-input">Фамилия</label>
                    <input className="profile--content--info--elem--text" id="lastName-input"
                        value={lastName} onChange={e => setLastName(e.target.value)}></input>
                </div>
                <div className="profile--content--info--elem">
                    <label className="profile--content--info--elem--title" htmlFor="age-input">Возраст</label>
                    <input className="profile--content--info--elem--text" id="age-input"
                        value={age} onChange={e => setAge(e.target.value)}></input>
                </div>
                <div className="profile--content--info--elem">
                    <label className="profile--content--info--elem--title" htmlFor="email-input">E-mail</label>
                    <input className="profile--content--info--elem--text" id="email-input"
                        value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
            </div>
            <div className="profile--button">
                <button type="submit">Сохранить</button>
            </div>
        </form>
    )
}

export default UserEditInfo