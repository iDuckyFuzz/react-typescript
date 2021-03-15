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

  const allUsers = usersState.allUsers.map((user, i) => (
    <div key={i}>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.job}</h2>
    </div>
  ));

  return (
    <div className="container">
      <h1>React With TypeScript</h1>
      <form onSubmit={submitForm}>
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

        <button type="submit">Add User</button>
      </form>
      {allUsers}
    </div>
  );
}

export default App;
