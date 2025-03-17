import usersJSON from "../../data/users.json"

function ManageUsers() {

  return (
    <div>
        {usersJSON.map(user => 
      <div key={user.email}>
        {user.nimi} - {user.email}  
        </div> )}
    </div>
  )
}

export default ManageUsers
