import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { MdDelete } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Users = () => {
  const usersData = useLoaderData()
  const [users, setUsers]=useState(usersData)

  const handelDelete=(id)=>{
    fetch(`http://localhost:5000/users/${id}`,{
      method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.deletedCount > 0){
        console.log("User delete sucessfully");
      
          const currentUser= users.filter(user=> user._id !== id)
          setUsers(currentUser)
        
       }
    })

  }
  return (
    <div className='container mx-auto px-6'>

      <div className="overflow-x-auto">
        <table className="table my-10 border p-3">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th className='text-xl font-medium text-black'>User No</th>
              <th className='text-xl font-medium text-black'>Email</th>
              <th className='text-xl font-medium text-black'>Password</th>
              <th className='text-xl font-medium text-black'>Last Login time</th>
              <th className='text-xl font-medium text-black'>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              users.map((user, index)=> <tr key={user._id}>
                <th className='text-lg font-medium text-gray-400'>{index+1}</th>
                <td className='text-lg font-medium text-gray-400'>{user.email}</td>
                <td className='text-lg font-medium text-gray-400'> {user.password} </td>
                <td className='text-lg font-medium text-gray-400'> {user.loginTime} </td>
                <td className='text-lg font-medium text-gray-400'>
                  <button onClick={()=> handelDelete(user._id)}> <RiDeleteBin6Line className='text-3xl text-red-500'> </RiDeleteBin6Line> </button>
                </td>
              </tr> )
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Users