import React from 'react'

export default function ToDoForm(props) {
  return (
    <form action ='' className='my-3' onSubmit={props.handleFormSubmit}>
        <input type="text" name='task' className='form-control' placeholder='enter a new to-do list' />
        <input type="submit" value='add to-do' className='btn btn-danger w-100 mt-3' />
    </form>
  )
}
