<script setup lang="ts">
// Your setup script here
import { useHead } from '#app'

// Set global meta tags
useHead({
  title: 'Chatbot App',
  meta: [
    {
      name: 'description',
      content: 'A simple chatbot application built with Nuxt 3',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss">
@import '~/assets/styles/main.scss';

:root {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --color-text: #d4d4d8;
  --muted: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
}

html,
body {
  height: 100%;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

#__nuxt {
  height: 100%;
}

.chatbot__welcome {
  padding: 1.5rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(63 63 70);
  color: rgb(161 161 170);
  max-width: 500px;
}

.chatbot__response__container {
  max-width: 500px;
  color: var(--color-text);
}

.chatbot__response__title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 2rem;
}

.chatbot__response__text {
  font-size: 16px;
  margin-bottom: 1rem;
}

.chatbot__response__ul {
  font-size: 16px;
  margin-bottom: 1rem;
}

.chatbot__form {
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: hsl(var(--foreground));
}

.chatbot__form__input {
  width: 500px;
  max-width: 500px;
  min-height: 200px;
  background-color: hsl(var(--muted));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-color: hsl(var(--input));
  border-width: 1px;
  border-radius: 0.5rem;
  overflow: scroll;
  display: flex;
  resize: none;
  font-size: 14px;
}
</style>
