<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
import Footer from '../components/Footer/Footer.vue';
</script>

<template>
  <main class="flex bg-indigo-200">
    <Sidebar />
    <section class="ml-2 mt-2">
      <router-view></router-view>
    </section>
  </main>
  <Footer/>
</template>
