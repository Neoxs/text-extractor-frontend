<script setup lang="ts">
const props = defineProps<{
  response: {
    who: string
    when: string
    where: string
  }
}>()
</script>

<template>
  <div class="chatbot__response__container">
    <h2 class="chatbot__response__title">Résumé :</h2>
    <p class="chatbot__response__text">
      Merci pour votre demande ! Voici la version résumée de votre texte,
      mettant en avant les détails clés :
    </p>
    <ul class="chatbot__response__ul">
      <li class="chatbot__response__li">
        <strong>Qui :</strong> <span id="who">{{ response?.who }}</span>
      </li>
      <li class="chatbot__response__li">
        <strong>Quand :</strong> <span id="when">{{ response?.when }}</span>
      </li>
      <li class="chatbot__response__li">
        <strong>Où :</strong> <span id="where">{{ response?.where }}</span>
      </li>
    </ul>
    <p class="chatbot__response__footer">
      N'hésitez pas à fournir plus de texte si vous souhaitez obtenir un autre
      résumé !
    </p>
  </div>
</template>

<style lang="scss">
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
</style>
