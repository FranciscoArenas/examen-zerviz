<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <button @click="increment">Contador: {{ count }}</button>
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
#app {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>