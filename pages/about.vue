<template>
  <form @submit="onSubmit" class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Login</h2>

    <div class="mb-4">
      <label class="block text-gray-700">E-mail</label>
      <input
        v-model="email"
        type="email"
        class="w-full border p-2 rounded-md"
        :class="{ 'border-red-500': errors.email }"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <!-- Campo de Senha -->
    <div class="mb-4">
      <label class="block text-gray-700">Senha</label>
      <input
        v-model="password"
        type="password"
        class="w-full border p-2 rounded-md"
        :class="{ 'border-red-500': errors.password }"
      />
      <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
    </div>

    <!-- Botão de Login -->
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Entrar
    </button>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

// Esquema de validação com Yup
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

// Configurar o formulário
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

// Campos individuais
const [email] = defineField("email");
const [password] = defineField("password");

// Função chamada ao enviar o formulário
const onSubmit = handleSubmit((values) => {
  console.log("Dados enviados:", values);
  alert("Login realizado com sucesso!");
});
</script>

<style></style>
