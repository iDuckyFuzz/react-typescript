import React, { useState } from 'react';
import './App.css';
import User, { UserInt } from './components/User'

//typescript component (react function component FC)
//let age: number = 20;
//type myNumber = number;
//let age: myNumber = 15;
const App: React.FC = () => {

  interface allUsersInt {
    currentUser: UserInt;
    allUsers: Array<UserInt>;
  }

  //const [usersState, setUsersState] = useState<{currentUser: {name: string, age:number, job:string}}>({})

  const [usersState, setUsersState] = useState<allUsersInt>({
    currentUser: {
      name: "",
      age: "",
      job: "",
      deleteUser: () => {}
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

  const submitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setUsersState({
      currentUser: {
        name: "",
        age: "",
        job: "",
        deleteUser: () => {}
      },
      allUsers: [
        ...usersState.allUsers,
        usersState.currentUser
      ]
    })
  }

  const deleteHandler = (index: number): void => {
    const filterUsers = usersState.allUsers.filter((user, i) => (
      index !== i
    ));
    setUsersState({
      ...usersState,
      allUsers: filterUsers
    })
  }

  const allUsers = usersState.allUsers.map((user, i) => (
    <User
      key={i}
      name={user.name}
      age={user.age}
      job={user.job}
      deleteUser={() => deleteHandler(i)}
    />
  ));

  return (
    <div className="container">
      <h1>React With TypeScript</h1>
      <form className="card" onSubmit={submitForm}>
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
