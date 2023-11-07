<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-sheet class="ma-2 pa-2">
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="firstName"
              label="First name"
              :rules="firstNameRules"
            ></v-text-field>

            <v-text-field
              v-model="lastName"
              label="Last name"
              :rules="lastNameRules"
            ></v-text-field>

            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const firstName = ref('');
      const lastName = ref('123');

      const firstNameRules = ref([
        (value) => {
          if (value?.length > 3) return true;
          return 'First name must be at least 3 characters.';
        },
      ]);

      const lastNameRules = ref([
        (value) => {
          if (/[^0-9]/.test(value)) return true;
          return 'Last name can not contain digits.';
        },
      ]);

      return {
        firstName,
        lastName,
        firstNameRules,
        lastNameRules,
      };
    },
  };
</script>
