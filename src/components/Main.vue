<script setup>
    import { ref } from 'vue';
    import Monaco from './Monaco.vue';
    import vm from 'vm-browserify';
    let code = ref('// JSRunner');

    let output = ref('');

    let r = [];

    window.console.log = window.console.dir = window.console.error = window.console.warn = (...args) => {
        r.push(...args);
    }

    async function updateCode() {
        r = []
        vm.runInNewContext(code.value, {Math, console})
        let logsOutput = [];
        r.forEach(el => {
            logsOutput.push(JSON.stringify(el));
        })
        console.dir(logsOutput)
        output.value = (logsOutput.join('\n') + '\n' + (vm.runInNewContext(code.value, {Math, console})?.toString() || ''))
    }

    function runCodeInterval(){
        updateCode();
        setTimeout(runCodeInterval, 3000);
    }

    runCodeInterval();
</script>

<template>
    <div id="editors">
        <Monaco :tvar="code"/>
        <Monaco :tvar="output"/>
    </div>
    
</template>

