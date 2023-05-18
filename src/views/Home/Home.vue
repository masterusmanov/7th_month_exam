<script setup>
    import {NavLinks} from "../../constants/NavLinks";
    import {NewLinks} from "../../constants/NewLinks";
    import {TableLinks} from "../../constants/TableLinks";
    import { studentStore } from "../../stores/student/studentStore";
    import { teacherStore } from "../../stores/teacher/teacherStore";


    const stores = studentStore()
    const stories = teacherStore()

</script>

<template>
    <div class="flex ">
        <div class="w-[920px] bg-blue-100 rounded-xl">
            <header>
                <nav class="flex justify-between w-full items-center pe-4">
                  <router-link to="/dashboard" class="logo ms-10 text-center text-2xl p-3 block text-blue-900 font-bold">Dashboard</router-link>
                  <div class="flex w-[170px] relative mr-14 border border-none">
                      <i class='bx bx-search-alt-2 text-2xl mt-1 ml-2 absolute text-black '></i>
                      <input type="text" class="pl-10 p-2 rounded-full" placeholder="Qidiruv">
                  </div>
                </nav>
              </header>
              <section class="mt-10">
                <div>
                    <div class="flex m-2 p-4 mt-10 bg-white rounded-[20px]">
                        <div class="w-1/2 mt-5 mb-5 justify-center items-center text-center">
                            <div class="flex items-center text-center">
                                <div class="w-1/2 ">
                                    <i class="bx bxs-user-account p-4 bg-indigo-800 text-white text-4xl rounded-full"></i>
                                </div>
                                <div class="w-1/1">
                                    <h1 class="text-black font-bold">O'quvchilar</h1>
                                    <h1 class="text-3xl font-bold">{{stores.LIST.length + 5}}</h1>
                                </div>
                              </div>                              
                        </div>
                        <div class="w-1/2 mt-5 mb-5 justify-center items-center text-center">
                            <div class="flex items-center text-center">
                                <div class="w-1/2 ">
                                    <i class="bx bxs-user-rectangle p-4 bg-orange-400 text-white text-4xl rounded-full"></i>
                                </div>
                                <div class="w-1/1">
                                    <h1 class="text-black font-bold">O'qituvchilar</h1>
                                    <h1 class="text-3xl font-bold">{{stories.LIST.length + 5}}</h1>
                                </div>
                              </div>                              
                        </div>
                        <div class="w-1/2 mt-5 mb-5 justify-center items-center text-center">
                            <div class="flex items-center text-center">
                                <div class="w-1/2 ">
                                    <i class="bx bx-calendar p-4 bg-yellow-300 text-white text-4xl object-cover rounded-full"></i>
                                </div>
                                <div class="w-1/1">
                                    <h1 class="text-black font-bold">Guruhlar</h1>
                                    <h1 class="text-3xl font-bold">40</h1>
                                </div>
                              </div>                              
                        </div>
                        <div class="w-1/2 mt-5 mb-5 justify-center items-center text-center">
                            <div class="flex items-center text-center">
                                <div class="w-1/2 ">
                                    <i class="bx bx-calendar p-4 bg-blue-900 text-white text-4xl rounded-full"></i>
                                </div>
                                <div class="w-1/1">
                                    <h1 class="text-black font-bold">Fanlar</h1>
                                    <h1 class="text-3xl font-bold">16</h1>
                                </div>
                              </div>                              
                        </div>
                      </div>
                      
                </div>
              </section>
              <section class="mt-10">
                <div>
                    <div class="m-2 p-4 mt-10 bg-white rounded-[20px] font-bold">
                        <router-link to="/teachers" class="ms-8 text-xl pl-[-10px] text-blue-900 font-bold">O'qituvchilar:</router-link>
                        <div class="overflow-x-auto mt-10">
                            <table class="min-w-full divide-y divide-gray-600">
                              <thead class="bg-gray-700 text-white">
                                <tr>
                                  <th scope="col" class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                    IMG
                                  </th>
                                  <th scope="col" class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                    F.I.O
                                  </th>
                                  <th scope="col" class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                    ID
                                  </th>
                                  <th scope="col" class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                    Sinfi
                                  </th>
                                  <th scope="col" class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                    Dars soati
                                  </th>
                                  <th scope="col" class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="bg-white divide-y text-center divide-gray-600" v-for="el in TableLinks" :key="el.id" >
                                <tr>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <img :src="el.img" alt="" class=" w-[50px] h-[50px] object-cover rounded-full">
                                  </td>
                                  <td class="px-6 py-4 text-justify whitespace-nowrap text-bold">
                                    <p>{{el.title}}</p>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    {{el.text}}
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap justify-center items-center">
                                    <i :class="el.icon" class='text-xl pl-2 pr-2 p-1 bg-rose-400 text-white rounded-full' ></i>
                                    <span class="ml-2">{{el.text1}}</span>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">{{el.time}}</td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                      <a href="#"><i class='bx bx-printer'></i></a>
                                      <a href="#"><i class='bx bx-dots-horizontal-rounded ml-5'></i></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <nav
            class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span class="text-sm font-normal text-black dark:text-black">
              Sahifa
              <span class="font-semibold text-black dark:text-white">1-10</span>
              dan
              <span class="font-semibold text-black dark:text-white">100 ta</span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  class="flex items-center  justify-center h-full py-1.5 px-3 ml-0 text-black bg-white rounded-l-lg border border-none hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex ml-2 items-center rounded-full justify-center text-sm py-2 px-3 leading-tight text-black bg-white border border-gray-700 hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                  >1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center ml-2 rounded-full justify-center text-sm py-2 px-3 leading-tight text-black bg-white border border-gray-700 hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center ml-2 rounded-full justify-center text-sm py-2 px-3 leading-tight text-black bg-white border border-gray-700 hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center ml-2 justify-center h-full py-1.5 px-3 leading-tight text-black bg-white rounded-r-lg border border-none hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
                    </div>
                </div>
              </section>
        </div>
        <div class="w-1/1 w-[260px]">
            <header>
                <nav class="flex justify-between w-full items-center ">
                    <a href="#"><i class='bx bx-bell text-black ml-3 text-3xl'></i></a>
                    <div class="relative">
                      <svg class="h-3 w-3" viewBox="0 0 24 24">
                      </svg>
                        <span class="absolute right-6 bottom-4 h-2 w-2 bg-blue-500 rounded-full"></span>
                    </div>
                  <a href="#"><i class='bx bx-cog text-black text-3xl mr-2'></i></a>
                  <div>
                    <h1 class="text-center font-bold">Ochilov. M</h1>
                    <p class="text-center font-bold text-black text-[12px]">Admin</p>
                  </div>
                  <div class="w-[45px]">
                      <img src="https://yt3.googleusercontent.com/ytc/AGIKgqO9gjC2hcodaRbMJtA3xIENtE-Bp1Q9OfD9VrQe=s900-c-k-c0x00ffffff-no-rj" alt="Ochilov. M" class="rounded-full object-cover">
                      
                  </div>
                </nav>
              </header>
              <section>
                <div class="flex justify-center items-center mt-10">
                    <div class="w-1/2 text-end">
                        <h1 class="text-2xl font-bold text-blue-900">Guruhlar</h1>
                    </div>
                    <div class="w-1/2 text-end font-bold">
                        <button class="text-xl w-[40px] h-[40px] text-white p-1 pb-2 rounded-full bg-indigo-700">+</button>
                    </div>
                  </div>
              </section>
              <section class="mt-10 ml-5">
                    <div class="flex justify-center items-center mt-5" v-for="el in NavLinks" :key="el.id">
                        <div class="w-1/4 ">
                            <img :src="el.img" alt="Dastur injinering" class="w-[50px] h-[50px] object-cover rounded-full">
                        </div>
                        <div class="w-1/2 ml-2">
                            <h1 class="text-justify font-bold ml-2">{{el.title}}</h1>
                            <p class="text-center text-[12px]">{{el.text}}</p>
                        </div>
                        <div class="w-1/1 ml-6 rounded-full pl-2 pr-2 text-2xl text-right border border-gray-500 hover:bg-indigo-600 ">
                            <router-link to="#"><i :class="el.icon" class="text-bold hover:text-white"></i></router-link>
                        </div>
                    </div>
                    <div class="flex justify-center items-center mt-12">
                        <button class="bg-gray-200 w-[200px] p-2 rounded-full text-indigo-800 font-bold" >Barchasi</button>
                    </div>
              </section>
              <section class="mt-10 ml-5">
                <div class="flex justify-center items-center mt-5 border-b-2 border-gray-500" v-for="el in NewLinks" :key="el.id">
                    <div class="w-1/4 ">
                        <img :src="el.img" alt="Dastur injinering" class="w-[45px] h-[45px] object-cover rounded-full">
                    </div>
                    <div class="w-1/2">
                        <h1 class="text-justify font-bold text-[12px]">{{el.title}}</h1>
                        <p class="text-justify text-[12px]">{{el.text}}</p>
                    </div>
                    <div class="w-1/1 ml-2 text-[12px] text-center ">
                        <router-link to="#"><p class="font-bold">{{ el.icon }}</p></router-link>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-12 mb-12">
                    <button class="bg-gray-200 w-[200px] p-2 rounded-full text-indigo-800 font-bold" >Barchasi</button>
                </div>
          </section>
              
              
        </div>
      </div>
</template>

<style lang="scss" scoped>
</style>