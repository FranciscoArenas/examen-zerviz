<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 p-8">
      <BrandPanel />
    </div>

    <div class="w-full md:w-1/2 flex items-center justify-center p-8">
      <LoginPanel :onSubmit="onSubmit" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import LoginPanel from '../components/LoginPanel.vue'
import BrandPanel from '../components/BrandPanel.vue'

const router = useRouter()

async function onSubmit(credentials) {
  try {
    // Aquí va la llamada real al endpoint de login
    // Ejemplo:
    // const res = await fetch('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials) })
    // if (!res.ok) throw new Error('Authentication failed')
    await new Promise(resolve => setTimeout(resolve, 1000)) // simulación
    // al terminar, redirigir al dashboard
    router.push({ name: 'Dashboard' })
  } catch (err) {
    // propaga el error si quieres manejarlo en el panel
    throw err
  }
}
</script>
