import React from 'react'
import { AiFillEye } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const Coffee = ({ coffee, coffees, setcoffees }) => {
    const { _id, name, category, taste, Supplier, details, coffeeChef, price,
        photo
    } = coffee;

    const haldelDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success')

                            const remaingCoffee = coffees.filter(cof => cof._id !== _id)
                            setcoffees(remaingCoffee)
                        }

                    })
            }

        })
    }

    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 p-4 rounded-lg'>
            <img className='rounded-lg' src={photo} alt="" />
            <div>
                <p className='text-xl text-[#1B1A1A] font-semibold'> Name:  <span className='font-normal text-[#5C5B5B]'> {name} </span></p>

                <p className='text-xl text-[#1B1A1A] font-semibold'> Chef::  <span className='font-normal text-[#5C5B5B]'> {coffeeChef} </span></p>
                <p className='text-xl text-[#1B1A1A] font-semibold'> Price: $  <span className='font-normal text-[#5C5B5B]'> {price} </span></p>

            </div>
            <div>
                <span>
                    <AiFillEye className='bg-[#D2B48C] mb-3 text-4xl px-2 py-1 text-white rounded-lg'> </AiFillEye>
                </span>

                <span>
                    <Link to={`/updateCoffee/${_id}`} >  <BsPencil className='bg-[#3C393B] mb-3 text-4xl px-2 py-1 text-white rounded-lg'> </BsPencil> </Link>
                </span>

                <span onClick={() => haldelDelete(_id)}>
                    <MdDelete className='bg-[#EA4744] text-4xl px-2 py-1 text-white rounded-lg'> </MdDelete>
                </span>
            </div>
        </div>
    )
}

export default Coffee