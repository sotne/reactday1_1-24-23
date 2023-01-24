import React from 'react'

const Form = (input, setinput) => {
    return (
        <form>
            <input type='text' placeholder='add to to-do list' className='task-input'/>
            <button className='button-add' type='submit'>add</button>
        </form>
    );
};

export default Form;