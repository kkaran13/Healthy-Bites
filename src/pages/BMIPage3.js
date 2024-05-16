import React from 'react'

const BMIPage3 = () => {
    return (
        <div className='h-screen'>
            <h1 className='text-slate-200 text-3xl mx-auto w-11/12 justify-center'>Your BMI is greater than 25, you are over weight</h1>
            <div className='w-11/12 max-w-[1450px] mx-auto bg-slate-200 my-5'>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table
                                    class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                    <thead
                                        class="border-b border-neutral-200 font-medium dark:border-white/10">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">Day</th>
                                            <th scope="col" class="px-6 py-4">Monday</th>
                                            <th scope="col" class="px-6 py-4">Tuesday</th>
                                            <th scope="col" class="px-6 py-4">Wednesday</th>
                                            <th scope="col" class="px-6 py-4">Thursday</th>
                                            <th scope="col" class="px-6 py-4">Friday</th>
                                            <th scope="col" class="px-6 py-4">Saturday</th>
                                            <th scope="col" class="px-6 py-4">Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">Morning</td>
                                            <td class="whitespace-nowrap px-6 py-4">Milk, Egg</td>
                                            <td class="whitespace-nowrap px-6 py-4">Milk, Egg, Bread</td>
                                            <td class="whitespace-nowrap px-6 py-4">Milk, bread, Toast</td>
                                            <td class="whitespace-nowrap px-6 py-4">Milk, bread, Toast</td>
                                            <td class="whitespace-nowrap px-6 py-4">Milk, bread, Toast</td>
                                            <td class="whitespace-nowrap px-6 py-4">Milk, bread, Toast</td>
                                            <td class="whitespace-nowrap px-6 py-4">Milk, bread, Toast</td>
                                        </tr>
                                        <tr
                                            class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">Afternoon</td>
                                            <td class="whitespace-nowrap px-6 py-4">salad, Dal, Rice</td>
                                            <td class="whitespace-nowrap px-6 py-4">salad, Dal, Rice</td>
                                            <td class="whitespace-nowrap px-6 py-4">salad, Dal, Rice</td>
                                            <td class="whitespace-nowrap px-6 py-4">salad, Dal, Rice</td>
                                            <td class="whitespace-nowrap px-6 py-4">salad, Dal, Rice</td>
                                            <td class="whitespace-nowrap px-6 py-4">salad, Dal, Rice</td>
                                            <td class="whitespace-nowrap px-6 py-4">salad, Dal, Rice</td>
                                        </tr>
                                        <tr
                                            class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">Night</td>
                                            <td class="whitespace-nowrap px-6 py-4">Dal, Rice, Salad</td>
                                            <td class="whitespace-nowrap px-6 py-4">Dal, Rice, Salad</td>
                                            <td class="whitespace-nowrap px-6 py-4">Dal, Rice, Salad</td>
                                            <td class="whitespace-nowrap px-6 py-4">Dal, Rice, Salad</td>
                                            <td class="whitespace-nowrap px-6 py-4">Dal, Rice, Salad</td>
                                            <td class="whitespace-nowrap px-6 py-4">Dal, Rice, Salad</td>
                                            <td class="whitespace-nowrap px-6 py-4">Dal, Rice, Salad</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BMIPage3