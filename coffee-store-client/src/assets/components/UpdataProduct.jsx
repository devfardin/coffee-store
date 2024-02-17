import React from 'react'
import { useLoaderData } from 'react-router-dom'
import swal from 'sweetalert';

export const UpdataProduct = () => {

    const coffee=useLoaderData();

    const { _id, name, category, taste, Supplier, details, coffeeChef, price,
        photo
    } = coffee;

  

    const handelUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.productName.value;
        const coffeeChef = form.coffee.value;
        const Supplier = form.Supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.imag_url.value;
        const details = form.detail.value;
        const price = form.price.value;

        const UpdateCoffee = { name, coffeeChef, details, price, Supplier, taste, category, photo }
        console.log(UpdateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
            },
             body: JSON.stringify(UpdateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    swal("Good job!", "You clicked the button!", "success");
                    form.reset()
                    return
                } else {
                    swal("Empty !", "Data not submited", "error");
                    return
                }
            })

    }

  return (
    <div className='container mx-auto px-5'>

    <section className="max-w-5xl my-10 p-6 mx-auto bg-[#F4F3F0] rounded-md shadow-md dark:bg-gray-800">
        <h1 className='text-4xl text-[#374151] font-semibold text-center '>Update Coffee</h1>

      


        <form onSubmit={handelUpdateCoffee}>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="productName">Name</label>
                    <input
                        required
                        id="productName"
                        defaultValue={name}
                        name="productName"
                       
                        type="text"
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="coffeeChef">Chef</label>
                    <input
                        id="coffeeChef"
                        name="coffee"
                        defaultValue={coffeeChef}
                        type="text"
                        placeholder='Enter coffee chef'
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="Supplier">Supplier</label>
                    <input
                        id="Supplier"
                        name="Supplier"
                        defaultValue={Supplier}
                        type="text"
                        placeholder='Enter coffee supplier'
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="taste">Taste</label>
                    <input
                        id="taste"
                        name="taste"
                        defaultValue={taste}
                        type="text"
                        placeholder='Enter coffee taste'
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="category">Category</label>
                    <input
                        required
                        id="category"
                        name="category"
                        defaultValue={category}
                        type="text"
                        placeholder='Enter coffee category'
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="Photo">Photo</label>
                    <input
                        id="Photo"
                        name="imag_url"
                        defaultValue={photo}
                        type="text"
                        placeholder='Enter photo URL'
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="details">details</label>
                    <input
                        id="details"
                        name="detail"
                        defaultValue={details}
                        type="text"
                        placeholder='Enter coffee details'
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 font-medium text-lg" htmlFor="details">Price</label>
                    <input
                        required
                        id="details"
                        defaultValue={price}
                        name="price"
                        type="text"
                        placeholder='Enter coffee Price'
                        className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    />
                </div>

            </div>

            <div className="flex justify-center mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Coffee</button>
            </div>
        </form>
    </section>

</div>
  )
}
