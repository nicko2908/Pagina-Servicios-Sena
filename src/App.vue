<template>
    <q-layout view="hHh lpR fFf">
        <div class="banner" :class="{'banner-hidden': scrolled}">
          <div class="flex flex-center">
            <img src="./assets/Banner SENA CAT.png" alt="Banner texto SENA CAT" class="BannerPortada">
          </div>
        </div>
    <q-header elevated class="bg-primary text-white q-px-xl" height-hint="98">
      <q-tabs align="left">
        <q-route-tab to="/" label="CAT"/>
        <q-route-tab to="/Enfermeria" label="Enfermería" />
        <q-route-tab to="/Bienestar" label="Bienestar" />
        <q-route-tab to="/Biblioteca" label="Biblioteca" />
        <q-route-tab to="/Cafeteria" label="Cafetería"/>
        <q-route-tab to="/Coordinacion" label="Coordinación"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import {ref} from 'vue'

</script>
<style>
:root{
    --color-sena: #007832;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.BannerPortada{
  width: 50%;
}

.banner {
  transition: transform 0.3s ease, opacity 0.3s ease;
  background: #007832; 
}

.banner-hidden {
  transform: translateY(-100%);
  opacity: 0;
  height: 0;
  overflow: hidden;
}

</style>