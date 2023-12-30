import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteTask = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteTask = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/task/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Task Deleted successfully', { variant: 'success' });
        navigate('/Home');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Task</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[300px] p-8 mx-auto md:w-[600px]'>
        <h3 className='text-xl md:text-2xl'>Are You Sure You want to delete this task?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteTask}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
    
  )
}

export default DeleteTask;
