import React, { useEffect, useState } from "react";
import "./Story.css";

function Story() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/static/storys.json').then((response) => response.json()).then(setdata);
    }, [])

    if (!data || !data.length) return null;

    return (
        <div class="outline-2">
            <div class="max-w-md mx-auto bg-white overflow-hidden story md:max-w-lg scale-100">
                <div class="md:flex out pt-2">
                    <div class="w-full p-2 px-2 py-1">

                        <ul class="flex space-x-4 overflow-hidden">

                            <li class="flex flex-col items-center">
                                <div class="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                                    <a href="#" class="bg-white p-1 rounded-full block transform transition hover:rotate-6">
                                        <img src="https://i.imgur.com/aq39RMA.jpg" class="rounded-full" width="60"></img>
                                    </a>
                                </div>
                                <span class="text-sm w-16 overflow-hidden overflow-ellipsis">riksy_stam143543</span>
                            </li>

                            <li class="flex flex-col items-center">
                                <div class="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                                    <a href="#" class="bg-white p-1 rounded-full block transform transition hover:rotate-6">
                                        <img src="https://i.imgur.com/eMaYwXn.jpg" class="rounded-full" width="60"></img>
                                    </a>
                                </div>
                                <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tina_2342</span>
                            </li>

                            <li class="flex flex-col items-center">
                                <div class="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                                    <a href="#" class="bg-white p-1 rounded-full block transform transition hover:rotate-6">
                                        <img src="https://i.imgur.com/zQZSWrt.jpg" class="rounded-full" width="60"></img>
                                    </a>
                                </div>
                                <span class="text-sm w-16 overflow-hidden overflow-ellipsis">sujan_tomy</span>
                            </li>

                            <li class="flex flex-col items-center">
                                <div class="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                                    <a href="#" class="bg-white p-1 rounded-full block transform transition hover:rotate-6">
                                        <img src="https://i.imgur.com/agRGhBc.jpg" class="rounded-full" width="60"></img>
                                    </a>
                                </div>
                                <span class="text-sm w-16 overflow-hidden overflow-ellipsis">rujanta_98432</span>
                            </li>

                            <li class="flex flex-col items-center">
                                <div class="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                                    <a href="#" class="bg-white p-1 rounded-full block transform transition hover:rotate-6">
                                        <img src="https://i.imgur.com/uIgDDDd.jpg" class="rounded-full" width="60"></img>
                                    </a>
                                </div>
                                <span class="text-sm w-16 overflow-hidden overflow-ellipsis">rony_dusak2</span>
                            </li>

                            <li class="flex flex-col items-center">
                                <div class="rounded-full bg-gradient-to-br from-yellow-200 to-red-500 p-1">
                                    <a href="#" class="bg-white p-1 rounded-full block transform transition hover:rotate-6">
                                        <img src="https://i.imgur.com/tT8rjKC.jpg" class="rounded-full" width="60"></img>
                                    </a>
                                </div>
                                <span class="text-sm w-16 overflow-hidden overflow-ellipsis">tom_hank_fan</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>

        /*
        <div class="flex flex-col items-center space-y-1 scale-80">
            <ul class="flex justify-between space-x">

                <li class="flex flex-col items-center space-y-1 px-2 ">
                    <div class="relative bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                            <img class="w-24 h-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty"></img>
                        </a>
                        <button class="absolute bg-blue-500 text-white text-2xl font-medium w-8 h-8 rounded-full bottom-0 right-1 border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700 focus:outline-none">
                            <div class="transform -translate-y-px">+</div>
                        </button>
                    </div>

                    <a href="#">kitty_one</a>
                </li>

                <li class="flex flex-col items-center space-y-1 px-2 ">
                    <div class="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                            <img class="w-24 h-24 rounded-full" src="https://placekitten.com/201/200" alt="cute kitty"></img>
                        </a>
                    </div>

                    <a href="#">kitty_two</a>
                </li>

                <li class="flex flex-col items-center space-y-1 px-2 ">
                    <div class="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                            <img class="w-24 h-24 rounded-full" src="https://placekitten.com/200/203" alt="cute kitty"></img>
                        </a>
                    </div>

                    <a href="#">kitty_three</a>
                </li>

                <li class="flex flex-col items-center space-y-1 px-2 ">
                    <div class="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                            <img class="w-24 h-24 rounded-full" src="https://placekitten.com/202/201" alt="cute kitty"></img>
                        </a>
                    </div>

                    <a href="#">kitty_four</a>
                </li>

            </ul>
        </div>
        */
    );
}

export default Story;
