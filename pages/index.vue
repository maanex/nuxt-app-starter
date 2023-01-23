<template>
  <SmaragdPage>
    <h1>Hi</h1>
    <Box v-for="user of data" class="user" :key="user.name">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </Box>
    <hr>
    <input type="text" v-model="tempMail">
    <input type="text" v-model="tempName">
    <button @click="addUser(tempMail, tempName)">Submit</button>
  </SmaragdPage>
</template>

<script setup lang="ts">
const { data, refresh } = await useFetch('/api/users')

const tempMail = useState(() => '')
const tempName = useState(() => '')

async function addUser(email: string, name: string) {
  await useFetch('/api/users', {
    method: 'POST',
    body: { email, name }
  })

  refresh()
}
</script>
