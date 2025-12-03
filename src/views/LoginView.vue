<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');
const loading = ref(false);
const feedback = ref('');
const router = useRouter();

const handleSubmit = async () => {
  loading.value = true;
  feedback.value = '';

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    feedback.value = 'Sesion iniciada. Redirigiendo al dashboard...';

    router.push('/dashboard');
  } catch (error) {
    feedback.value = error.message || 'Ocurrio un error al autenticar.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section class="auth-card">
    <div class="card-header">
      <h2>Acceder</h2>
      <p>Autenticación segura </p>
    </div>

    <form class="auth-form" @submit.prevent="handleSubmit">
      <label class="input-group">
        <span>Correo</span>
        <input
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="operador@finca.com"
          required
        />
      </label>

      <label class="input-group">
        <span>Contraseña</span>
        <input
          v-model="password"
          type="password"
          name="password"
          autocomplete="current-password"
          placeholder="••••••••"
          minlength="6"
          required
        />
      </label>

      <button class="primary" type="submit" :disabled="loading">
        {{ loading ? 'Procesando...' : 'Entrar' }}
      </button>
    </form>

    <p class="feedback" v-if="feedback">{{ feedback }}</p>

    <div class="hint">
      <small>
        Albacete Electromontajes ARBI
      </small>
    </div>
  </section>
</template>
