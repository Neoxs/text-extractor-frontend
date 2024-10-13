<script setup lang="ts"></script>

<template>
  <div class="animate-pulse space-y-2">
    <div class="h-4 loader__line rounded w-3/4"></div>
    <div class="h-4 loader__line rounded"></div>
    <div class="h-4 loader__line rounded w-5/6 mb-4"></div>

    <div class="h-4 loader__line rounded w-2/4"></div>
    <div class="h-4 loader__line rounded"></div>
    <div class="h-4 loader__line rounded w-4/6"></div>

    <div class="h-4 loader__line rounded w-3/4"></div>
    <div class="h-4 loader__line rounded"></div>
    <div class="h-4 loader__line rounded w-5/6 mb-4"></div>

    <div class="h-4 loader__line rounded w-2/4"></div>
    <div class="h-4 loader__line rounded"></div>
    <div class="h-4 loader__line rounded w-4/6"></div>
  </div>
</template>

<style lang="scss">
.loader__line {
  background-color: #E0E0E0;
}
</style>
