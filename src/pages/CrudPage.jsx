
import { useState } from 'react'
import $ from 'jquery';
import React from 'react'
import people from '../Api';

const CrudPage = () => {

    let data = localStorage.getItem("info")

    const [student, setStudent] = useState(data ? JSON.parse(data) : people)
    const [type, setType] = useState('name')

    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newGroup, setNewGroup] = useState('')

    localStorage.setItem("info", JSON.stringify(student))

    
    const del = (caught) =>{
        let newStudent = student.filter((val) => val.id !== caught)
        setStudent(newStudent)                                                                                      
    }

    const searchingType = (e) =>{
        setType(e.target.value)
    }
    // console.log(type);

    const search = (e) =>{
            let newStudent = people.filter((val) => val[type].toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()))
            setStudent(newStudent)
    }

    const ism = (e) =>{
        setNewName(e.target.value)
    }
    const fam = (e) =>{
        setNewSurname(e.target.value)
    }
    const yosh = (e) =>{
        setNewAge(e.target.value)
    }
    const gruh = (e) =>{
        setNewGroup(e.target.value)
    }

    const create = () =>{
        let newPerson = {
            id: student.length + 1,
            name: newName,
            lastName: newSurname,
            age: newAge,
            grNum: newGroup
        }
        setStudent([...student, newPerson])
        
       
        {
            $('.info').val(null);

        }
    }

  return (

  
    <div className='CRUDpage mx-20 my-20'>
        <div>
            <input type="text" className='info' onChange={ism} placeholder='Name' /><br /><br />
            <input type="text" className='info' onChange={fam} placeholder='LastName' /><br /><br />
            <input type="number" className='info' onChange={yosh} placeholder='Age' /><br /><br />
            <input type="number" className='info' onChange={gruh} placeholder='Group Number' /><br /><br />
            <button onClick={create}>Create</button>
            <br /><br />
            <input type="text" onChange={search} placeholder='Type to Search' />&nbsp;&nbsp;
            <select onChange={searchingType}>
            <option value="name">With Name</option>
            <option value="lastName">With lastname</option>
            </select>
            <br /><br />
        </div>

        <table border={5} cellPadding={15}>
            <thead>
                <tr className='p-5'>
                    <th className='p-5'>ID</th>
                    <th className='p-5'>Name</th>
                    <th className='p-5'>LastName</th>
                    <th className='p-5'>Age</th>
                    <th className='p-5'>Group</th>
                    <th className='p-5'>Activity</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map( (v, index) =>{
                        return(
                            <tr key={v.id}>
                                <th className='p-3'>{index + 1}</th>
                                <th className='p-3'>{v.name}</th>
                                <th className='p-3'>{v.lastName}</th>
                                <th className='p-3'>{v.age}</th>
                                <th className='p-3'>{v.grNum}</th>
                                <th className='p-3'><button onClick={ () => del(v.id) }>Delete</button></th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  
  )
}

export default CrudPage

