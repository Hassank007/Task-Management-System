import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import CreateTask from './pages/CreateTask';
import ShowTask from './pages/ShowTask';
import EditTask from './pages/EditTask';
import DeleteTask from './pages/DeleteTask';
import SignupForm from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignupForm/>}/>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/Home' element={<Home />} />
      <Route path='/task/create' element={<CreateTask />} />
      <Route path='/task/details/:id' element={<ShowTask />} />
      <Route path='/task/edit/:id' element={<EditTask />} />
      <Route path='/task/delete/:id' element={<DeleteTask />} />
    </Routes>
  );
};

export default App;
