<script setup>
    import { DashboardLinks } from '../../constants/DashboardLinks';
</script>

<template>
    <div class="sidebar w-[299px] shadow-lg min-h-screen relative bg-indigo-600">
        <div class="flex pt-10 justify-center items-center">
        <h1 class="px-2 py-1 text-white rounded-xl text-center inline-block w-[48px] h-[48px] text-3xl font-bold bg-red-500">A</h1>
            <a href="/" class="logo inline-block text-center ml-4 text-white text-4xl font-bold">Academy</a>
        </div>
        <!-- <div v-for="el in DashboardLinks">
            <router-link :to="el.link" :href="el.link" class="p-3 rounded-l-full text-white ml-10 text-justify w-[210px] h-[50px] hover:bg-white hover:text-black "><i :class="el.icon"></i><span class="ms-3">{{ el.title }}</span></router-link>
        </div> -->

        <div class="list mt-10">
            <router-link
              class=" ml-2 rounded-l-full text-lg font-bold p-4 block my-2 text-white hover:bg-white hover:text-black duration-100"
              v-for="el in DashboardLinks" :key="el.id"
              :to="el.link"
            >
              <i :class="el.icon" class="ml-5 text-2xl"></i> <span class="ms-3">{{ el.title }}</span>
            </router-link>
          </div>
            <div class="mt-20 ml-10 rounded-l-full font-bold p-4 block my-2 text-white hover:bg-white hover:text-black duration-100">
                <a href="/" class="m-auto font-bold">Chiqish><i class='bx bx-log-out ms-20'></i></a></div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        background-color: rgb(251, 250, 252);
        color: black;
    }
</style>