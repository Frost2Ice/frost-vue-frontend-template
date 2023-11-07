/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#333333',
    surface: '#333333',
    primary: '#333333',
    'primary-darken-1': '#3700B3',
    secondary: '#ffd400',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    // defaultTheme: 'myCustomDarkTheme',
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#ffd400',
          secondary: '#333333',
          'primary-darken-1': '#3700B3',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      },
      dark: {
        colors: {
          background: '#121212',
          surface: '#333333',
          primary: '#333333',
          'primary-darken-1': '#3700B3',
          secondary: '#ffd400',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      },
      myCustomDarkTheme
    }
  }
})
