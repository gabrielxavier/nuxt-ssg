<template>
    <div>
        <ul>
            <li v-for="todo in data.todos" :key="todo.id">{{ todo.title }}</li>
        </ul>
    </div>
</template>

<script setup>
const { getAll } = useJsonPlaceholderRepository()

const { data } = await useAsyncData(`page-todos`, async () => {
    const [todos] = await Promise.all([ getAll()])

    console.log(todos)

    return {
        todos
    }
})

// const { data: todos, error } = await useAsyncData(`todos`, getAll)

</script>
