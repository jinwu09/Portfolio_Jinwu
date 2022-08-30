<script></script>

<template>
  <nav
    class="fixed z-[1] grid w-[100%] bg-transparent pl-6 pr-2 text-skin-base phone:grid-cols-[50%_20%_30%] desktopsml:grid-cols-[75%_10%_15%] desktoplg:grid-cols-[80%_10%_10%]"
  >
    <div class="p-2">
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
