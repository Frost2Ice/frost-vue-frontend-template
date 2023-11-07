<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset

      <v-btn @click="toggleTheme">toggle theme</v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = async () => {
  await console.log('[Current Theme]: ', theme.global.name.value, theme.global.current.value.light);
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
};
</script>
