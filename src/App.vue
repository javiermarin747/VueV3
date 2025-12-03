<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="branding">
        <span class="badge">PWA</span>
        <h1>Arbi IoT Dashboard</h1>
      </div>
      <p class="subtitle">Control centralizado para pivots, variadores y bombeo inteligente.</p>
      <nav class="nav">
        <RouterLink to="/">Iniciar sesión</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </header>
    <main class="app-content">
      <RouterView />
    </main>
    <footer class="app-footer">
      <p>Gestion de Riegos </p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
