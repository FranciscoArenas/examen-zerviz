<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-sm w-full max-w-md mx-auto" aria-live="polite">
    <h2 class="text-2xl font-bold font-sans mb-4">Iniciar sesión</h2>
    <div class="flex flex-col gap-2">
      <label for="email" class="font-medium">Correo electrónico</label>
      <input
        id="email"
        v-model="email"
        type="email"
        required
        autocomplete="email"
        :class="['input', error.email ? 'border-red-500' : 'border-gray-300']"
        @focus="clearError('email')"
        class="input rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500"
      />
      <span v-if="error.email" class="text-red-500 text-sm" aria-live="assertive">{{ error.email }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="password" class="font-medium">Contraseña</label>
      <div class="relative">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          required
          autocomplete="current-password"
          :class="['input', error.password ? 'border-red-500' : 'border-gray-300']"
          @focus="clearError('password')"
          class="input rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 pr-10"
        />
        <button type="button" @click="toggleShowPassword" class="absolute right-2 top-2 text-gray-500 focus:outline-none" :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'">
          <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-6 0a9 9 0 0118 0c0 2.21-1.79 4-4 4s-4-1.79-4-4z" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18M9.75 9.75a3 3 0 004.5 4.5M21 21a9 9 0 01-18 0c0-2.21 1.79-4 4-4s4 1.79 4 4z" /></svg>
        </button>
      </div>
      <span v-if="error.password" class="text-red-500 text-sm" aria-live="assertive">{{ error.password }}</span>
    </div>
    <button :disabled="loading" class="bg-blue-600 text-white font-bold py-2 rounded-xl shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center">
      <span v-if="!loading">Entrar</span>
      <span v-else class="flex items-center gap-2">
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
        Cargando...
      </span>
    </button>
    <span v-if="error.general" class="text-red-500 text-sm mt-2" aria-live="assertive">{{ error.general }}</span>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  onSubmit: Function
})
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref({ email: '', password: '', general: '' })

function toggleShowPassword() {
  showPassword.value = !showPassword.value
}
function clearError(field) {
  error.value[field] = ''
}
async function onSubmit() {
  loading.value = true
  error.value = { email: '', password: '', general: '' }
  // Validación simple
  if (!email.value) error.value.email = 'El correo es requerido.'
  if (!password.value) error.value.password = 'La contraseña es requerida.'
  if (error.value.email || error.value.password) {
    loading.value = false
    return
  }
  try {
    // Llama al endpoint de login
    await props.onSubmit?.({ email: email.value, password: password.value })
  } catch (e) {
    error.value.general = 'Error de autenticación.'
  }
  loading.value = false
}
</script>

<style scoped>
.input {
  @apply border px-3 py-2 font-sans text-base outline-none transition;
}
</style>
