<script setup lang="ts">
const { state, response, submitQuery, resetChat } = useChatbot()

//
const text = reactive('')

const validation = reactive({
  error: state.error ?? false,
  msg: '',
})

//
const sendMessage = async (text: string) => {
  if (text.length < 50) {
    validation.error = true
    validation.msg = 'Text is required and must be at least 50 chars'
    return
  } else {
    await submitQuery(text)
  }
}

const resetData = () => {
  resetChat()
}
</script>

<template>
  <div
    class="min-h-screen text-white container mx-auto flex flex-row justify-center"
  >
    <div class="flex flex-col justify-between">
      <!-- Error alert -->
      <div
        v-if="state.error && state.resolved"
        class="chatbot__alert--error"
        role="alert"
      >
        <strong class="font-bold">Zut!</strong>{{ ' ' }}
        <span class="block sm:inline"
          >Quelque chose de vraiment grave s'est produit. Veuillez cliquer sur
          Réessayer.</span
        >
      </div>

      <!-- loader -->
      <ChatbotLoader
        v-if="state.loading && !state.resolved"
        class="mt-20 mx-4 md:mx-0"
      />

      <!-- response -->
      <ChatbotResponse
        v-else-if="!state.loading && state.resolved"
        :response="response"
        class="mt-20 mx-4 md:mx-0"
      />

      <!-- hero section -->
      <div
        v-else
        class="flex flex-col gap-4 h-full w-dvw items-center overflow-y-scroll"
      >
        <div
          class="chatbot__welcome text-sm flex flex-col gap-4 mt-20 mx-4 md:mx-0"
        >
          <strong>Bienvenue dans notre application de chatbot !</strong>
          <p>
            Notre application utilise Nuxt.js, Flask et Ollama pour offrir une
            expérience utilisateur fluide. Soumettez votre texte, et
            l'application génère automatiquement un prompt pour extraire les
            informations clés telles que qui, quand et où.
          </p>
          <p>
            Vous pouvez en apprendre davantage sur la logique de ce processus
            dans notre dépôt GitHub.
          </p>
        </div>
      </div>

      <!-- form -->
      <ChatbotForm
        :loading="state.loading"
        :resolved="state.resolved"
        :error="state.error"
        @submit="sendMessage"
        @resetData="resetChat"
      />
    </div>
  </div>
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

.chatbot__alert--error {
  background-color: #fee2e2; /* bg-red-100 */
  border: 1px solid #f87171; /* border-red-400 */
  color: #b91c1c; /* text-red-700 */
  padding: 0.75rem 1rem; /* px-4 py-3 */
  border-radius: 0.375rem; /* rounded */
  position: relative; /* relative */
  margin-top: 2rem;
  max-width: 500px;
}
</style>
