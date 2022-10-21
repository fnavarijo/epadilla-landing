<script setup>
import InputForm from '~/components/Form/InputForm.vue';
import TextAreaForm from '~~/components/Form/TextAreaForm.vue';
import ButtonForm from '~~/components/Form/ButtonForm.vue';
</script>

<template>
  <article class="mt-32 md:max-w-3xl mx-auto px-8">
    <form class="space-y-6">
      <InputForm label="Nombre" name="name" />
      <InputForm label="Correo" type="email" name="email" />
      <TextAreaForm label="Mensaje" name="email" />
      <ButtonForm class="mx-auto block">Enviar</ButtonForm>
    </form>
  </article>
</template>
