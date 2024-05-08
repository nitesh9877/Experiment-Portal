import React from 'react'
import AddButton from '../components/crudoperation/AddButton'
import AddForm from '../components/crudoperation/AddForm'
import { MyContext } from '../MyContextProvider'
import { useContext } from 'react'

const Crudoperation = () => {
    const { showForm } = useContext(MyContext);

  return (
    <div>
      <AddButton/>
      {showForm&&(
      <AddForm/>
    )}
      
    </div>
  )
}

export default Crudoperation;