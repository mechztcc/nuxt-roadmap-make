
<template>
  <div class="flex flex-col h-full justify-center px-20">

    <div class="flex justify-center">
     <img class="h-12 px-2 py-2 rounded-lg w-fit" src="~/assets/undraw_fun-arrow.svg" alt="">
    </div>

    <h3 class="text-3xl text-center">Bem vindo</h3>
    <span class="text-lg text-center">Preencha o formulário abaixo para acessar sua conta</span>

      <label class="block text-gray-700 text-start mt-10">E-mail</label>
      <input
        v-model="email"
        type="email"
        class="w-full border p-2 rounded-lg"
        :class="{ 'border-red-500': errors.email }"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>

      <label class="block text-gray-700 mt-5">Senha</label>
      <input
        v-model="password"
        type="password"
        class="w-full border p-2 rounded-lg"
        :class="{ 'border-red-500': errors.password }"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>

    <div class="flex justify-end w-full mt-2">
      <span class="text-end cursor-pointer hover:text-yellow-400">Esqueceu a senha?</span>
    </div>
    <button class="w-full bg-zinc-800 py-3 px-5 rounded-full text-white hover:text-yellow-400 cursor-pointer mt-5">ENTRAR</button>
    <div class="flex justify-center my-3">ou</div>
  
    <div class="flex justify-center my-3">
      <button class="py-3 px-3 hover:border rounded-full w-full">
        Criar nova conta
      </button>
    </div>


  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const [email] = defineField("email");
const [password] = defineField("password");

const onSubmit = handleSubmit((values) => {
  console.log("Dados enviados:", values);
  alert("Login realizado com sucesso!");
});
</script>

<style scoped>
</style>
