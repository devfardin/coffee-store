import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../AppContext';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
const provider = new GoogleAuthProvider();

const SingUp = () => {
    const { haldelCreateUser, haldelGooglepop } = useContext(ProviderContext)
    const handelSingUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        haldelCreateUser(email, password)
        .then(() => {
                const userInfo = { email, password }
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data);
                })
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })  
            })

            .catch((error) => {
                console.log(error);
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }

    const handelGoogle = () => {
        haldelGooglepop(provider)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Sucessfully login',
                    showConfirmButton: false,
                    timer: 2000
                })
            })

            .catch(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Login Failed!',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }



    return (
        <div className="w-full max-w-md my-10 p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h1 className='text-3xl font-semibold text-center'>Create Account</h1>
            <div className="flex justify-center mx-auto">
            </div>

            <form onSubmit={handelSingUp} className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-base font-medium text-gray-800 dark:text-gray-200">Email</label>
                    <input
                        type="email"
                        name='email'
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-base font-medium text-gray-800 dark:text-gray-200">Password</label>
                        <a href="#" className="text-base font-medium text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                    </div>

                    <input
                        type="password"
                        name='password'
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark-text-gray-300 dark-border-gray-600 focus-border-blue-400 dark-focus-border-blue-300 focus-ring-blue-300 focus-outline-none focus-ring focus-ring-opacity-40"
                    />
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus-outline-none focus-ring focus-ring-gray-300 focus-ring-opacity-50">
                        Sign In
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark-border-gray-600 lg:w-1/5"></span>

                <a href="#" className="text-base text-center text-gray-500 uppercase dark-text-gray-400 hover:underline">
                    or login with Social Media
                </a>

                <span className="w-1/5 border-b dark-border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button onClick={handelGoogle} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus-bg-blue-400 focus-outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

            </div>

            <p className="mt-8 text-base font-light text-center text-gray-400"> Don't have an account? <Link to='/singin' className="font-medium text-gray-700 dark:text-gray-200 hover:underline"> Login </Link> </p>
        </div>
    );
}

export default SingUp