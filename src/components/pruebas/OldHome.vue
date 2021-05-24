<template>
    <h1 class="mb-6 text-3xl font-extrabold">Home Evol</h1>
    <p class="mb-6" v-once> {{ name }}</p>
    <p class="mb-6">Name in store is: {{ name }}</p>

    <input
        type="text"
        v-model="newName"
        class="p-2 border border-gray-600 rounded mr-4"
    />
    <button @click="saveName" class="text-white bg-indigo-600 p-2 rounded">Submit</button>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const name = computed(() => {
    return store.state.user.name
})

const newName = ref('')

function saveName() {
    store.dispatch('saveName', newName.value)
    newName.value = ''
    // router.push('/about')
}
</script>
