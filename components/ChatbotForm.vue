<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const props = defineProps<{
  loading: boolean
  resolved: boolean
  error: boolean
}>()

const state = reactive({
  text: '',
})

const validationError = ref('')

const loading = computed(() => props.loading || false)
const resolved = computed(() => props.resolved || false)
const error = computed(() => props.error || false)

const emit = defineEmits(['submit', 'resetData'])

const validateText = () => {
  if (state.text.length === 0) {
    validationError.value = 'Le message est requis.'
    return false
  }
  if (state.text.length < 50) {
    validationError.value = 'Le message doit contenir au moins 50 caractères.'
    return false
  }
  validationError.value = ''
  return true
}

const handleSubmit = () => {
  if (validateText()) {
    emit('submit', state.text)
  }
}

const handleReset = () => {
  state.text = ''
  validationError.value = ''
  emit('resetData')
}
</script>

<template>
  <div
    class="flex flex-col max-w-[500px] align-center gap-4 mx-auto chatbot__form"
  >
    <textarea
      name="text"
      rows="3"
      class="chatbot__form__input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      :class="{ 'border-red-500': validationError }"
      placeholder="Envoyer un message..."
      :disabled="loading || resolved || error"
      v-model="state.text"
      @input="validateText"
    ></textarea>
    <div v-if="validationError" class="text-red-500 text-sm">
      {{ validationError }}
    </div>
    <button
      @click="handleSubmit"
      :disabled="loading || validationError || state.text.length === 0"
      v-if="!resolved && !error"
      :class="[
        'chatbot__form__btn',
        {
          'opacity-50 cursor-not-allowed':
            validationError || state.text.length === 0,
        },
      ]"
    >
      {{ loading ? 'Traitement en cours...' : 'Envoyer' }}
    </button>
    <button
      v-else
      @click="handleReset"
      :disabled="loading"
      class="chatbot__form__btn"
    >
      Réessayer
    </button>
  </div>
</template>

<style lang="scss">
.chatbot__form__btn {
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #2b6cb0;
  border: 1px solid #3b82f6;
  transition: all 0.3s ease;
}

.chatbot__form__btn:hover:not(:disabled) {
  background-color: #3b82f6;
  color: white;
  border-color: transparent;
}
</style>
