<template>
    <h1 v-on:click="click">
        home vue template
    </h1>
</template>
<script>
    export default {
        components: {
            
        },
        methods: {
            click(){
                alert("haha");
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>