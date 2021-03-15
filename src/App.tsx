import React, { useState } from 'react';
import './App.css';

//typescript component (react function component FC)
//let age: number = 20;
//type myNumber = number;
//let age: myNumber = 15;
const App: React.FC = () => {

  interface UserInt {
    name: string;
    age: string;
    job: string;
  }

  interface allUsersInt{
    currentUser: UserInt;
    allUsers: Array<UserInt>;
  }

  //const [usersState, setUsersState] = useState<{currentUser: {name: string, age:number, job:string}}>({})

  const [usersState, setUsersState] = useState<allUsersInt>({
    currentUser: {
      name: "",
      age: "",
      job: "",
    },
    allUsers: []
  });

  // function returns nothing
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitForm = (e: React.SyntheticEvent) : void => {
    e.preventDefault();
    setUsersState({
      currentUser: {
        name: "",
        age: "",
        job: "",
      },
      allUsers:[
        ...usersState.allUsers,
        usersState.currentUser
      ]
    })
  }

  const deleteUser = (e: React.SyntheticEvent) : void => {
    e.preventDefault();
    console.log(usersState.allUsers[0])
  }

  const allUsers = usersState.allUsers.map((user, i) => (
    <div className="user" key={i}>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Job: {user.job}</h2>
      <form onSubmit={deleteUser}>
        <button type="submit" value={i}>Delete User</button>
      </form>
    </div>
  ));

  return (
    <div className="container">
      <h1>React With TypeScript</h1>
      <form className="addUserForm" onSubmit={submitForm}>
        <label htmlFor="userName">Name:</label>
        <input
          id="userName"
          type="text"
          name="name"
          value={usersState.currentUser.name}
          onChange={onChangeHandler}
        />
        <label htmlFor="userAge">Age:</label>
        <input
          id="userAge"
          type="number"
          name="age"
          value={usersState.currentUser.age}
          onChange={onChangeHandler}
        />
        <label htmlFor="userJob">Job</label>
        <input
          id="userJob"
          type="text"
          name="job"
          value={usersState.currentUser.job}
          onChange={onChangeHandler}
        />

        <button className="addUser" type="submit">Add User</button>
      </form>
      {allUsers}
    </div>
  );
}

export default App;
