<script>
import VueCookies from "vue-cookies";
export default {
  data() {
    return {
      isConsent: false,
    };
  },
  methods: {
    getCookie() {
      if (VueCookies.get("Consent") == "true") {
        this.isConsent = true;
      } else {
        this.isConsent = false;
      }
    },
    setCookie() {
      VueCookies.set("Consent", "true");
      this.getCookie();
    },
  },
  mounted() {
    this.getCookie();
  },
};
</script>
<template>
  <footer
    class="z-10 bg-skin-focus p-4 text-skin-inverted"
    v-if="isConsent != true"
  >
    <p class="mb-2">
      By clicking “Accept all cookies”, you agree Jinwu can store cookies on
      your device and disclose information in accordance with our
      <router-link to="Privacy_Policy" class="text-skin-navigation"
        >privacy policy</router-link
      >
      and
      <router-link to="Cookie_Policy" class="text-skin-navigation"
        >cookie policy</router-link
      >
    </p>
    <button
      class="rounded-md bg-skin-button-accent p-1 text-skin-button-accent-inverted hover:bg-skin-button-accent-hover"
      @click="setCookie()"
    >
      Accept all cookies
    </button>
    <p>{{ isConsent }}</p>
  </footer>
</template>
