<script setup>
import { ref, reactive } from "vue";
import { teacherStore } from "../../stores/teacher/teacherStore";
import { toast } from "vue3-toastify";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);
const buttonName = ref("Qo'shish");

const addsTeacher = (index)=>{
    toggleModal();
    buttonName.value = "Qo'shish"
}

const updateTeacher = (index)=>{
    toggleModal();
    buttonName.value = "Yangilash"
}

const teachers = reactive({
  first_name: "",
  last_name: "",
  login: "",
  password: "",
  info: "",
  image: "",
  birthday: "",
  group: "",
});

const store = teacherStore();

const addTeacher = () => {
  const teacher = {
    first_name: teachers.first_name,
    last_name: teachers.last_name,
    login: teachers.login,
    password: teachers.password,
    info: teachers.info,
    image: teachers.image,
    birthday: teachers.birthday,
    group: teachers.group,
  };

  store.ADD(teacher);

  toast.success("Successfully!", {
    autoClose: 1000,
    theme: "light",
    pauseOnHover: true,
  });

  toggleModal();
};
</script>

<template>
  <div class="flex justify-center items-center" >
    <div class="w-[900px] rounded-xl">
      <header>
          <nav class="flex justify-between w-full items-center pe-4">
            <router-link to="/teachers" class="logo ms-10 text-center text-2xl p-3 block text-blue-900 font-bold">O'qituvchilar</router-link>
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
                <img src="https://yt3.googleusercontent.com/ytc/AGIKgqO9gjC2hcodaRbMJtA3xIENtE-Bp1Q9OfD9VrQe=s900-c-k-c0x00ffffff-no-rj" alt="Ochilov. M" class="rounded-full">
                
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
              <button @click="addsTeacher" class="bg-indigo-800 w-[200px] ml-24 pb-2 rounded-3xl text-white font-bold text-3xl hover:bg-violet-900 focus:ring-4 ring-2">+</button>
          </nav>
        </header>
      </div>
  </div>

  <!-- ----------------------------------------------- Modal Start ---------------------------------------------- -->

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
    <div class="relative bg-white rounded-[20px] shadow-lg w-[1000px] h-[650px]">
        <div class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#4D44B5] rounded-t-[20px]">
          <h3 class="text-2xl font-bold text-white">O'qituvchi ma`lumotlari</h3>
          <button
            @click="toggleModal"
            type="button"
            class="text-white bg-transparent hover:bg-white hover:text-[#4D44B5] rounded-lg p-1.5"
          >
            <svg
              aria-hidden="true"
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
        <form @submit.prevent="addTeacher">
          <div class="grid gap-4 ml-20 m-4 sm:grid-cols-2 mt-5">
            <div class="mb-3">
              <label
                for="first_name"
                class="block mb-2 text-xl font-medium text-black"
                >Ism <span class="text-red-600">*</span></label>
              <input
                v-model="teachers.first_name"
                type="first_name"
                name="first_name"
                id="first_name"
                class="border border-gray-400 text-[#A098AE] text-sm rounded-xl block w-[350px] h-[40px] p-2.5"
                placeholder="Ismini kiriting"
                required=""
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-xl font-medium text-black"
                >Familiyasi <span class="text-red-600">*</span></label>
                <input
                v-model="teachers.last_name"
                type="last_name"
                name="last_name"
                id="last_name"
                class="border border-gray-400 text-[#A098AE] text-sm rounded-xl block w-[350px] h-[40px] p-2.5"
                placeholder="Familiyasini kiriting"
                required=""
              />
            </div>
            <div class="mb-3">
              <label for="login"
              class="block mb-2 text-xl font-medium text-black"
                >Login <span class="text-red-600">*</span></label>
                <input
                v-model="teachers.login"
                type="username"
                name="login"
                id="login"
                class="border border-gray-400 text-[#A098AE] text-sm rounded-xl block w-[350px] h-[40px] p-2.5"
                placeholder="Familiyasini kiriting"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-xl font-medium text-black"
                >Parol <span class="text-red-600">*</span></label>
              <input
                v-model="teachers.password"
                type="password"
                name="password"
                id="password"
                class="border border-gray-400 text-[#A098AE] text-sm rounded-xl block w-[350px] h-[40px] p-2.5"
                placeholder="******************"
                required=""
              />
            </div>
            <div class="mb-3">
              <label for="info" 
              class="block mb-2 text-xl font-medium text-black"
                >Ma`lumot <span class="text-red-600">*</span></label>
              <textarea
                v-model="teachers.info"
                name="info"
                id="info"
                class="border border-gray-400 text-[#A098AE] text-sm rounded-xl block w-[350px] h-[100px] p-2.5"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                required=""
              ></textarea>
            </div>
            <div class="flex items-start justify-center w-[50%] col-span-1 row-span-1 mt-6">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" class="w-10 h-10 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p class="mb-2 text-[10px] text-black text-center"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                      <p class="text-xs text-black text-center">SVG, PNG, JPG</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
              </label>
          </div>

          <div >
            <label for="group" class="block mb-2 text-xl font-medium text-black"
              >Guruhni tanlang <span class="text-red-600">*</span></label>
            <input v-model="teachers.birthday" type="date" name="brand" id="brand" class="flex w-[80%] text-sm text-black rounded-md border border-gray-300 cursor-pointer dark:text-black focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="username" required="">
        </div>

            <div>
              <label for="group" class="block mb-2 text-xl font-medium text-black"
              >Fan nomi<span class="text-red-600">*</span></label>
              <input
                v-model="teachers.group"
                type="text"
                name="group"
                id="group"
                class="border border-gray-400 text-[#A098AE] text-sm rounded-xl block w-[350px] h-[40px] p-2.5"
                placeholder="Fan nomi"
                required=""
              />
            </div>
          </div>
          <div class="mt-8 ">
            <p class="text-end mr-10"><button
              type="submit"
              class="py-3 w-[100px]  text-white bg-indigo-800 font-bold hover:bg-blue-900  focus:ring-4 focus:ring-blue-300 rounded-full">
              {{ buttonName }}
            </button></p>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- ----------------------------------------------- Modal End ------------------------------------------------ -->

  <!-- ----------------------------------------------- Teachers Start ------------------------------------------- -->

  <section class="flex w-[1100px] ml-24 mt-10">

    <div class="flex flex-wrap gap-4 justify-beetwen items-center">
      <div v-for="(el, i) in store.LIST" :key="i" class="w-[250px] h-[350px] shadow-lg bg-[#FFFFFF] rounded-[20px]">
        <div class="text-end pr-5">
        <a @click="updateTeacher(i)" href="#" class="text-black inline-block text-2xl rounded-full px-1 mt-2  hover:bg-indigo-800 hover:text-white">
          <i class="bx bx-dots-horizontal-rounded"></i>
        </a>
      </div>
      <div class="flex justify-center items-center">
        <img class="w-[120px] h-[120px] object-cover justify-center items-center rounded-full" src="https://media.npr.org/assets/img/2019/09/18/freshair2_wide-8d4da2ac591bba71c0901ce4423f08d050558940-s1100-c50.jpg" alt=""/>
      </div>
        <h1 class="text-black text-2xl font-bold text-center">
          {{ el.first_name }} {{ el.last_name }}
        </h1>
        <p class="text-black text-[18px] font-bold text-center mt-5">
          {{el.group}}
        </p>
        <div class="flex justify-center gap-6 items-center mt-6">
          <a href="#"
            class="text-2xl text-center bg-indigo-800 rounded-full text-white w-[45px] h-[40px] p-1 pr-3 pl-2 border-2 border-[#4D44B5] hover:bg-blue-900 hover:text-white focus:ring-2 focus:ring-blue-500"
          >
            <i class="bx bx-phone"></i>
          </a>
          <a href="#"
          class="text-2xl text-center bg-indigo-800 rounded-full text-white w-[45px] h-[40px] p-1 pr-3 pl-2 border-2 border-[#4D44B5] hover:bg-blue-900 hover:text-white focus:ring-2 focus:ring-blue-500"
          >
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <div class="mt-3 flex justify-end">
          <button @click="store.REMOVE_TEACHER(el.first_name)"
                  class="w-[40px] mr-3"
                >
                  <i class="bx bx-trash text-red-600 hover:text-blue-900"></i>
                </button>
        </div>
      </div>
    </div>
  </section>
    <nav class="border-b mt-10 bg-white px-4 py-3 rounded-2xl" aria-label="Table navigation">
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

  <!-- ----------------------------------------------- Teachers End --------------------------------------------- -->

  
</template>

<style lang="scss" scoped>
</style>