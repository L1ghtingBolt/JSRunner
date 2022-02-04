<script setup>
    import MonacoEditor from 'vue-monaco-cdn';
    const props = defineProps({
        tvar: String
    })
</script>

<template>
<MonacoEditor
    class="editor"
    v-model="props.tvar"
    language="javascript"
    :options="{
        theme: 'vs-dark',
        padding: {
            top:20,
        },
        fontSize: 18,
        fontLigatures: true,
        fontFamily: 'Cascadia',
        automaticLayout: true,
        minimap: {
            enabled: false,
        },
        mouseWheelZoom: true,
        
    }"
/>
</template>

<style>
.editor {
    height: 100vh;
    width: 50vw;
}

#editors {
    display: flex;
}
</style>