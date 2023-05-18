<script setup>
import { ref, reactive } from "vue";
import { studentStore } from "../../stores/student/studentStore";
import { toast } from "vue3-toastify";

const modal = ref(false);
const buttonName = ref("Qo'shish");


const toggleModal = () => (modal.value = !modal.value);

const addsStudent = (index)=>{
    toggleModal();
    buttonName.value = "Qo'shish"
}
const updateStudent = (index)=>{
    toggleModal();
    buttonName.value = "Yangilash"
}
const students = reactive({
  first_name: "",
  last_name: "",
  birthday: "",
  group: "",
  login: "",
  password: "",
});

const store = studentStore();

const addStudent = () => {
  const student = {
    first_name: students.first_name,
    last_name: students.last_name,
    birthday: students.birthday,
    group: students.group,
    login: students.login,
    password: students.password,
  };

  store.ADD(student);

  
  toast.success("Successfully!", {
    autoClose: 1000,
    theme: "light",
    pauseOnHover: true,
  });

  students.first_name = "";
  students.last_name = "";
  students.birthday = "";
  students.group = "";
  students.login = "";
  students.password = "";
  
  toggleModal();
  
};

</script>

<template>
  <div class="flex justify-center items-center" >
    <div class="w-[900px] rounded-xl">
      <header>
          <nav class="flex justify-between w-full items-center pe-4">
            <router-link to="/students" class="logo ms-10 text-center text-2xl p-3 block text-blue-900 font-bold">O'quvchilar</router-link>
          </nav>
        </header>
    </div>
    <div class="w-[300px] pr-4">
      <header>
          <nav class="flex justify-between w-full items-center ">
              <a href="#"><i class='bx bx-bell text-black text-3xl'></i></a>
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
      </div>
  </div>
  <div class="flex justify-center items-center mt-5" >
    <div class="w-[900px] rounded-xl">
      <header>
          <nav class="flex justify-between w-full items-center pe-4">
            <div class="flex w-[170px] relative ml-10 mt-5 ">
              <i class='bx bx-search-alt-2 text-2xl mt-1 ml-2 absolute text-black '></i>
              <input type="text" class="pl-10 p-2 rounded-full" placeholder="Qidiruv">
          </div>
          </nav>
        </header>
    </div>
    <div class="w-[300px] pr-4">
      <header>
          <nav class="flex justify-between w-full items-end ">
              <button @click="addsStudent" class="bg-indigo-800 w-[200px] ml-24 pb-2 rounded-3xl text-white font-bold text-3xl hover:bg-violet-900 focus:ring-4 ring-2">+</button>
          </nav>
        </header>
      </div>
  </div>
  <!------------------------------------------------ Modal Start - ----------------------------------->

  <div
    tabindex="-1"
    aria-hidden="true"
    :class="
      modal
        ? 'overflow-y-auto flex bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full'
        : 'hidden'
    "
  >
    <div class="relative p-4">
      <div class="relative bg-white rounded-[20px] shadow-lg w-[800px] h-[550px]">
        <div
          class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#4D44B5] rounded-t-[20px]"
        >
          <h3 class="text-[24px] font-bold text-white">O'quvchi ma`lumotlari</h3>
          <button
            @click="toggleModal"
            type="button"
            class="text-white bg-transparent hover:bg-white hover:text-[#4D44B5] rounded-lg p-1.5"
          >
            <svg
              aria-hidden=""
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form @submit.prevent="addStudent">
          
          <div class="flex">
            
          <div class="md ml-5">
            <label
              for="first_name"
              class="block ml-4  font-bold text-blue-800"
              >Ism <span class="font-bold text-red-700">*</span></label
            >
            <input
              v-model="students.first_name"
              type="first_name"
              name="first_name"
              id="first_name"
              class="bg-[#FFFFFF] border mt-2 ml-3 border-gray-500 text-black  text-sm rounded-[5px] block w-[350px] h-[40px] p-2.5"
              placeholder="Ismi"
              required=""
            />
          </div>
          <div class="md">
            <label
              for="last_name"
              class="block ml-10  font-bold text-blue-800"
              >Familiyasi <span class="font-bold text-red-700">*</span></label
            >
             <input
              v-model="students.last_name"
              type="last_name"
              name="last_name"
              id="last_name"
              class="bg-[#FFFFFF] border mt-2 ml-10 border-gray-500 text-black  text-sm rounded-[5px] block w-[350px] h-[40px] p-2.5"
              placeholder="Familiyasi"
              required=""
            />
          </div>
        </div>
        <!-- =============================== -->
        <div class="flex mt-5">
          <div class="md ">
              <label
                for="birthday"
                class="block ml-8  font-bold text-blue-800"
              >Tug'ilgan sanasi <span class="font-bold text-red-700">*</span></label
              >
              <input v-model="students.birthday" type="date" name="brand" id="brand" class="bg-[#FFFFFF] border mt-2 ml-8 border-gray-500 text-black  text-sm rounded-[5px] block w-[220px] h-[40px] p-2.5"  placeholder="1995.02.25" required="">
            </div>
            <div class="ml-[170px]">
              <label for="category" class="block   font-bold text-blue-800"
              >Guruhini kiriting <span class="font-bold text-red-700">*</span></label
              >
              <select v-model="students.group" id="category" class="block w-full mt-2 text-sm text-gray-900 rounded-md border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                <option value="223">223</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="76">76</option>
                <option value="48">48</option>
                <option value="20">20</option>
                <option value="16">16</option>
                <option value="26">26</option>
              
            </select>
            </div>
        </div>
          <!-- =============== -->
        <div class="flex mt-5">
          <div class="md">
            <label for="login" class="block ml-9  font-bold text-blue-800"
            >Login <span class="font-bold text-red-700">*</span></label
            >
            <input
              v-model="students.login"
              type="username"
              name="login"
              id="login"
              class="bg-[#FFFFFF] border mt-2 ml-8 border-gray-500 text-black  text-sm rounded-[5px] block w-[350px] h-[40px] p-2.5"
              placeholder="Login kiriting"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block ml-10  font-bold text-blue-800"
                >Parol <span class="font-bold text-red-700">*</span></label
            >
            <input
              v-model="students.password"
              type="password"
              name="password"
              id="password"
              class="bg-[#FFFFFF] border mt-2 ml-10 border-gray-500 text-black  text-sm rounded-[5px] block w-[350px] h-[40px] p-2.5"
              placeholder="**********"
              required=""
            />
          </div>
        </div>
        <div class="flex items-center justify-center mt-10 ml-10 w-[30%] col-span-1 row-span-3">
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p class="mb-2 text-[10px] text-gray-600 text-center"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-600 text-center">SVG, PNG, JPG</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
          </label>
      </div> 
        <!-- ===================== -->
        <div>
          <p class="text-end mr-10 mt-[-50px]"><button
            type="submit"
            class="py-3 w-[100px]  text-white bg-indigo-800 font-bold hover:bg-blue-900  focus:ring-4 focus:ring-blue-300 rounded-full">
            {{ buttonName }}
          </button></p>
        </div>
        </form>
      </div>
    </div>
  </div>

  <!-- --------------------------------------------- Model End ------------------------------------ -->
  <!-- ============================================================================================ -->

  <!-- --------------------------------------------- Students Start ------------------------------- -->

  <section class="mt-10">
    <div>
      <p class="ms-10 p-4 text-bold">Frame</p>
      <div class="ml-12 mr-10 overflow-auto bg-white rounded-xl shadow-lg">
        <table class="w-full text-left text-black justify-center items-center">
          <thead class="text-xs text-black">
            <tr class="border-b font-bold text-white bg-gray-600">
              <th scope="col" class="px-4 py-3">
                <input class="w-[20px] h-[20px]" type="checkbox" />
              </th>
              <th scope="col" class="text-justify ml-14 ">
                <p class="font-bold text-sm ml-5">I.F.O <i class="bx bx-down-arrow-alt text-[20px]"></i></p>
              </th>
              <th scope="col" class="font-bold text-sm text-center">
                Guruh raqami <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="font-bold text-sm text-center">
                Bosqich <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="font-bold text-sm text-center">
                Qo'shilgan sana <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="font-bold text-sm text-center">
                ID raqami <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="font-bold text-sm text-center"></th>
            </tr>
          </thead>
          <tbody class="bg-white justify-center items-center">
            <tr v-for="(el, i) in store.LIST" :key="i" class="border-b">
              <td class="text-center">
                <input class="w-[20px] h-[20px]" type="checkbox" />
              </td>
              <th scope="row" class="px-4 py-3 flex items-center gap-5">
                <img class="w-[45px] h-[45px] object-cover rounded-full mt-2" src="https://media.npr.org/assets/img/2019/09/18/freshair2_wide-8d4da2ac591bba71c0901ce4423f08d050558940-s1100-c50.jpg" alt="" />
                <div class="w-[150px] h-[38px]">
                  <p class="text-black font-bold">{{ el.first_name }}</p>
                  <p class="text-black font-bold">{{ el.last_name }}</p>
                </div>
              </th>
              <td class="text-center text-black font-bold">
                {{ el.group }}
              </td>
              <td class="text-center font-bold">Developer</td>
              <td class="text-center font-bold">
                {{ new Date().getDate() }}.{{ new Date().getMonth() }}.{{
                  new Date().getFullYear()
                }}
              </td>
              <td class="text-center text-graty-500 font-bold">ID{{i+1}}</td>
              <td class="text-center text-black text-[25px]">
                <button @click="store.REMOVE_STUDENT(el.first_name)"
                  class="w-[40px] focus:ring-4 focus:ring-blue-300 border-white border-2 hover:border-2 hover:border-[#4D44B5] rounded-[8px] mr-3"
                >
                  <i class="bx bx-trash text-red-600"></i>
                </button>
                <button @click="updateStudent(i)"
                  class="w-[40px] focus:ring-4 focus:ring-blue-300 border-white border-2 hover:border-2 hover:border-[#4D44B5] rounded-[8px]"
                >
                  <i class="bx bxs-edit text-blue-800"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <nav class="border-b bg-white px-4 py-3" aria-label="Table navigation">
          <ul class="flex justify-between items-center">
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-black bg-white rounded-[8px] border border-gray-300 hover:border-[#4D44B5] hover:text-[#4D44B5] focus:ring-2 focus:ring-blue-300"
              >
                <span class="text-[12px]">avvalgisi</span>
              </a>
            </li>

            <span class="text-sm font-normal text-black dark:text-black">
              Sahifa
              <span class="font-semibold text-black dark:text-white text-[12px]">1-10</span>
              dan
              <span class="font-semibold text-black dark:text-white text-[12px]">1000</span>
            </span>

            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-black bg-white rounded-[8px] border border-gray-300 hover:border-[#4D44B5] hover:text-[#4D44B5] focus:ring-2 focus:ring-blue-300"
              >
                <span class="text-[12px]">keyingisi</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <!-- --------------------------------------------- Students End --------------------------------- -->

 
</template>

<style scoped></style>
