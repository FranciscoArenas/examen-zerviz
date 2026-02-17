<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4" style="background-color: #D6D3D1;">
        <div class="w-full items-center justify-center max-w-3xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-16">
                <h1 class="text-6xl font-light text-slate-900 mb-4 tracking-tight">API Endpoints</h1>
                <p class="text-lg text-slate-600 font-light">Prueba tus endpoints de forma interactiva</p>
                <div class="h-1 w-20 bg-gradient-to-r from-slate-300 to-slate-400 mx-auto mt-6"></div>
            </div>
            
            <!-- GET Saludo Card -->
            <div class="bg-white rounded-3xl p-10 mb-10 border-t-2 border-slate-300 transform hover:scale-102 transition-all duration-300" 
                 style="box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 32px, rgba(255, 255, 255, 0.6) 0px 1px 0px inset; user-select: auto;">
                <div class="flex items-center gap-4 mb-8 justify-center">
                    <div class="w-14 h-14 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full flex items-center justify-center border border-emerald-200">
                        <span class="text-emerald-700 font-light text-sm tracking-wide"></span>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800"></h2>
                </div>
                
                <p class="text-slate-600 mb-8 leading-relaxed text-center font-light">
                    Obtén un saludo amistoso desde la API. No requiere parámetros.
                </p>

                <div class="space-y-4 flex flex-col items-center">
                    <button 
                        @click="callSaludo"
                        :disabled="loading.saludo"
                        :aria-label="loading.saludo ? 'Cargando saludo...' : 'Llamar endpoint de saludo'"
                        class="bg-gradient-to-r from-emerald-600 to-emerald-700 
                        hover:from-emerald-700 hover:to-emerald-800 disabled:from-slate-400 
                        disabled:to-slate-500 text-white font-light py-3 px-8 rounded-full 
                        transition duration-300 transform hover:scale-105 disabled:hover:scale-100 
                        flex items-center justify-center gap-2 tracking-wide shadow-lg"
                    >
                        <span v-if="!loading.saludo" class="text-xl">→</span>
                        <span v-else class="animate-spin">⏳</span>
                        {{ loading.saludo ? 'Cargando...' : 'Llamar Saludo' }}
                    </button>

                    <!-- Success Response -->
                    <transition name="slide">
                        <div v-if="saludoResponse && !saludoError" class="p-5 bg-gradient-to-r from-emerald-50 to-blue-50 border-l-2 border-emerald-400 rounded-xl text-center">
                            <p class="text-emerald-700 font-light text-sm tracking-wide">✓ RESPUESTA</p>
                            <p class="text-slate-700 mt-3 font-light text-base">{{ saludoResponse }}</p>
                        </div>
                    </transition>

                    <!-- Error Response -->
                    <transition name="slide">
                        <div v-if="saludoError" class="p-5 bg-gradient-to-r from-red-50 to-rose-50 border-l-2 border-red-400 rounded-xl text-center">
                            <p class="text-red-700 font-light text-sm tracking-wide">✗ ERROR</p>
                            <p class="text-slate-700 mt-3 font-light text-base">{{ saludoError }}</p>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- POST Adios Card -->
            <div class="bg-white rounded-3xl p-10 mb-10 border-t-2 border-slate-300 transform hover:scale-102 transition-all duration-300"
                 style="box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 32px, rgba(255, 255, 255, 0.6) 0px 1px 0px inset; user-select: auto;">
                <div class="flex items-center gap-4 mb-8 justify-center">
                    <div class="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center border border-blue-200">
                        <span class="text-blue-700 font-light text-sm tracking-wide"></span>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800"></h2>
                </div>
                
                <p class="text-slate-600 mb-8 leading-relaxed text-center font-light">
                    Envía tu nombre para recibir una despedida personalizada.
                </p>

                <div class="space-y-4">
                    <!-- Input Field -->
                    <div class="space-y-2 flex flex-col items-center">
                        <label for="nombre" class="block text-sm font-light text-slate-700 text-center">
                            Tu nombre <span class="text-slate-400">*</span>
                        </label>
                        <input 
                            id="nombre"
                            v-model="nombre" 
                            type="text" 
                            placeholder="Ej: Franco"
                            :disabled="loading.adios"
                            maxlength="50"
                            class="px-6 py-3 border border-slate-200 rounded-full focus:outline-none focus:border-slate-400 focus:bg-slate-50 transition duration-200 disabled:bg-slate-100 disabled:cursor-not-allowed font-light text-center placeholder-slate-400 shadow-lg max-w-xs"
                            @keyup.enter="callAdios"
                            aria-describedby="nombre-hint"
                        >
                        <p id="nombre-hint" class="text-xs text-slate-500 text-center font-light">
                            {{ nombre.length }}/50 caracteres
                        </p>
                    </div>

                    <!-- Submit Button -->
                    <div class="flex justify-center">
                        <button 
                            @click="callAdios"
                            :disabled="!nombre.trim() || loading.adios"
                            :aria-label="loading.adios ? 'Enviando...' : 'Enviar nombre y llamar endpoint de adios'"
                            class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-400 disabled:to-slate-500 text-white font-light py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2 tracking-wide shadow-lg"
                        >
                            <span v-if="!loading.adios" class="text-xl">→</span>
                            <span v-else class="animate-spin">⏳</span>
                            {{ loading.adios ? 'Enviando...' : 'Llamar Adios' }}
                        </button>
                    </div>

                    <!-- Success Response -->
                    <transition name="slide">
                        <div v-if="adiosResponse && !adiosError" class="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-2 border-blue-400 rounded-xl text-center">
                            <p class="text-blue-700 font-light text-sm tracking-wide">✓ RESPUESTA</p>
                            <p class="text-slate-700 mt-3 font-light text-base">{{ adiosResponse }}</p>
                        </div>
                    </transition>

                    <!-- Error Response -->
                    <transition name="slide">
                        <div v-if="adiosError" class="p-5 bg-gradient-to-r from-red-50 to-rose-50 border-l-2 border-red-400 rounded-xl text-center">
                            <p class="text-red-700 font-light text-sm tracking-wide">✗ ERROR</p>
                            <p class="text-slate-700 mt-3 font-light text-base">{{ adiosError }}</p>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- Global Error Message -->
            <transition name="slide">
                <div v-if="error" class="p-5 bg-gradient-to-r from-red-50 to-rose-50 border-l-2 border-red-400 rounded-xl text-center">
                    <p class="text-red-700 font-light text-sm tracking-wide">⚠ ERROR GENERAL</p>
                    <p class="text-slate-700 mt-3 font-light">{{ error }}</p>
                </div>
            </transition>

        </div>

        <!-- Footer -->
        <div class="mt-16 text-center text-gray-600 text-sm w-full max-w-2xl mx-auto">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            saludoResponse: '',
            adiosResponse: '',
            saludoError: '',
            adiosError: '',
            nombre: '',
            error: '',
            loading: {
                saludo: false,
                adios: false
            }
        }
    },
    methods: {
        async callSaludo() {
            try {
                this.loading.saludo = true;
                this.saludoError = '';
                this.saludoResponse = '';
                this.error = '';

                const response = await fetch('http://localhost:3001/saludo');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                this.saludoResponse = data.mensaje;
            } catch (err) {
                this.saludoError = 'No se pudo conectar con la API. Asegúrate que esté corriendo en localhost:3001';
                console.error('Error en saludo:', err);
            } finally {
                this.loading.saludo = false;
            }
        },
        async callAdios() {
            try {
                this.loading.adios = true;
                this.adiosError = '';
                this.adiosResponse = '';
                this.error = '';

                if (!this.nombre.trim()) {
                    this.adiosError = 'Por favor ingresa tu nombre antes de continuar';
                    this.loading.adios = false;
                    return;
                }

                const response = await fetch('http://localhost:3001/adios', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nombre: this.nombre.trim() })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                this.adiosResponse = data.mensaje;
            } catch (err) {
                this.adiosError = 'No se pudo conectar con la API. Asegúrate que esté corriendo en localhost:3001';
                console.error('Error en adios:', err);
            } finally {
                this.loading.adios = false;
            }
        }
    }
}
</script>

<style scoped>
/* Smooth transitions for responses */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Animation for loading spinner */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>
