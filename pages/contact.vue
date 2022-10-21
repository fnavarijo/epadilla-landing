<script setup>
import InputForm from '~/components/Form/InputForm.vue';
import TextAreaForm from '~~/components/Form/TextAreaForm.vue';
import ButtonForm from '~~/components/Form/ButtonForm.vue';

const contactMessage = ref({});

// TODO: Add form validation
function sendingForm() {
  console.log('Message', contactMessage.value);
}
</script>

<template>
  <article class="mt-32 md:max-w-3xl mx-auto px-8">
    <form class="space-y-6" @submit.prevent="sendingForm">
      <InputForm label="Nombre" name="name" v-model="contactMessage.name" />
      <InputForm label="Correo" type="email" name="email" v-model="contactMessage.email" />
      <TextAreaForm label="Mensaje" name="message" v-model="contactMessage.message" />
      <ButtonForm class="mx-auto block" type="submit">Enviar</ButtonForm>
    </form>
  </article>
</template>
