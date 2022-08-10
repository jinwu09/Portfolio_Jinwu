<script></script>

<template>
  <nav
    class="grid grid-cols-8 bg-skin-fill-accent pl-2 pr-2 text-skin-base shadow-lg shadow-slate-600"
  >
    <div class="col-span-6 p-2">
      <h1 class="">Porftolio</h1>
    </div>
    <div class="p-2">
      <router-link to="Home" class="text-center">Home</router-link>
    </div>
    <div class="p-2">
      <p>Contact Info</p>
    </div>
  </nav>
  <router-view></router-view>
</template>
