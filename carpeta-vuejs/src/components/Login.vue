<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const loading = ref(false);
const emailError = ref('');
const passwordError = ref('');

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const validateEmail = () => {
  if (!email.value) {
    emailError.value = 'El correo electrónico es obligatorio.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Por favor, introduce un correo electrónico válido.';
  } else {
    emailError.value = '';
  }
};

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = 'La contraseña es obligatoria.';
  } else {
    passwordError.value = '';
  }
};

const handleSubmit = () => {
  validateEmail();
  validatePassword();

  if (!emailError.value && !passwordError.value) {
    loading.value = true;
    // Simulate API call
    setTimeout(() => {
      loading.value = false;
      alert('¡Inicio de sesión exitoso!');
    }, 2000);
  }
};
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Branding Section -->
    <div class="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-900">
      <div class="text-center">
        <h1 class="text-5xl font-bold text-white">Zerviz</h1>
        <p class="mt-2 text-lg text-gray-400">Modern Dashboard Login</p>
      </div>
    </div>

    <!-- Form Section -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div class="w-full max-w-md">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>
        <form @submit.prevent="handleSubmit" novalidate>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                v-model="email"
                @blur="validateEmail"
                type="email"
                required
                class="block w-full px-4 py-3 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                :class="{ 'border-red-500': emailError }"
                aria-describedby="email-error"
              />
            </div>
            <p v-if="emailError" id="email-error" class="mt-2 text-sm text-red-600" aria-live="assertive">{{ emailError }}</p>
          </div>

          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                id="password"
                v-model="password"
                @blur="validatePassword"
                :type="showPassword ? 'text' : 'password'"
                required
                class="block w-full px-4 py-3 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                :class="{ 'border-red-500': passwordError }"
                aria-describedby="password-error"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-gray-600"
              >
                {{ showPassword ? 'Ocultar' : 'Mostrar' }}
              </button>
            </div>
            <p v-if="passwordError" id="password-error" class="mt-2 text-sm text-red-600" aria-live="assertive">{{ passwordError }}</p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <span v-if="loading" class="spinner mr-2"></span>
            {{ loading ? 'Iniciando...' : 'Iniciar Sesión' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
