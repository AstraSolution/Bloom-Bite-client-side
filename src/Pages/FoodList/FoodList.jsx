import React from 'react';

const FoodList = () => {


    const food = [
        {
            "name": "pizza",
            "image": "https://i.ibb.co/ySH7v7y/pizza.jpg",
            "healthy": 100,
            "calories": 90
        },
        {
            "name": "coffee",
            "image": "https://i.ibb.co/0j8pnzH/coffee.jpg",
            "healthy": 80,
            "calories": 90
        },
    ]





    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-semibold '>

                            <th></th>
                            <th>Image</th>
                            <th>Name </th>
                            <th> Healthy </th>
                            <th>Calories </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            food?.map((item, i) => <tr key={i}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        {/* <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div> */}
                                    </div>
                                </td>
                                <td  className='text-lg font-semibold uppercase'>
                                    {item.name}


                                </td>
                                <td className='text-lg font-semibold uppercase'>{item.healthy}% </td>
                                <td className='text-lg font-semibold uppercase'>{item.calories}% </td>
                                <th>
                                    <button className="btn btn-ghost btn-md text-lg font-semibold uppercase"> 
                                Details Now </button>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default FoodList;