<template>
    <div id="app" class="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 font-sans">
        <!-- Header -->
        <header class="w-full bg-white/80 shadow-md py-6 px-4 flex items-center justify-between mb-10 sticky top-0 z-10">
            <div class="flex items-center gap-3">
                <span class="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">V</span>
                <span class="text-2xl font-bold text-slate-800 tracking-tight">Vue Endpoints App</span>
            </div>
            <span class="text-slate-500 font-light text-sm hidden sm:block">by Francisco Arenas</span>
        </header>

        <main class="flex flex-col items-center justify-center flex-1">
            <div class="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-10 mt-8 mb-8 fade-in">
                <h1 class="text-4xl font-extrabold text-emerald-700 mb-4 tracking-tight">{{ title }}</h1>
                <p class="text-lg text-slate-600 mb-6 font-light">{{ message }}</p>
                <button @click="increment"
                    class="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
                    Contador: {{ count }}
                </button>
            </div>
            <slot></slot>
        </main>

        <!-- Footer -->
        <footer class="w-full text-center py-6 text-slate-500 text-sm bg-white/70 mt-auto shadow-inner">
            © {{ new Date().getFullYear() }} Francisco Arenas. Todos los derechos reservados.
        </footer>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            title: 'Mi Aplicación Vue',
            message: 'Bienvenido a Vue.js',
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
}
</script>

<style scoped>
/* Mejoras visuales generales */
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #f1f5f9 0%, #e0e7ef 100%);
}
.fade-in {
    animation: fadeIn 0.5s ease-in;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>