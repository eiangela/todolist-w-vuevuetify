<script setup>
import { useAppStore } from "../store/app";

const appStore = useAppStore();

// Referenciando as propriedades reativas e métodos definidos no gerenciador de estado
const files = appStore.files;
const file = appStore.file;
const addTask = appStore.addTask;
const remove = appStore.remove;
const completeTask = appStore.completeTask;
const changeIcon = appStore.changeIcon;

function onClear() {
  // lógica de limpar o campo file
}

function changeInputIcon() {
  // lógica de mudar o ícone
}
</script>

<template>
  <v-card class="mx-auto" max-width="600">
    <v-app id="inspire">
      <v-app-bar>
        <v-toolbar-title class="primary text-center"
          >To Do List</v-toolbar-title
        >
      </v-app-bar>
      <v-main>
        <v-form @submit.prevent="addTask">
          <v-container fluid>
            <v-row justify="center">
              <v-col cols="8" class="d-flex justify-center">
                <v-text-field
                  v-model="file"
                  clearable
                  label="Nova Tarefa"
                  placeholder="Tarefa"
                  persistent-clear
                  @keyup.enter="addTask"
                  @click:clear="onClear(file)"
                  @click:prepend="changeInputIcon"
                ></v-text-field>
                <v-btn @click="addTask(file)" icon color="green" class="ml-2">
                  <v-icon icon="mdi-plus"></v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-list
          lines="two"
          class="d-flex justify-center align-center flex-column width-500"
        >
          <v-list-item
            v-for="file in files"
            :key="file.title"
            :title="file.title"
            :subtitle="file.subtitle"
            @click="completeTask(file)"
            :class="file.done && 'complete'"
          >
            {{ file.name }}
            <template v-slot:prepend>
              <v-avatar color="grey-lighten-1">
                <v-icon color="white">mdi-list-box-outline</v-icon>
              </v-avatar>
            </template>
            <template v-slot:append>
              <v-btn
                color="grey-lighten-1"
                icon="mdi-delete-forever"
                variant="text"
                @click.stop="remove(file)"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-main>
    </v-app>
  </v-card>
</template>

<style scoped>
.complete {
  text-decoration: line-through;
  color: green;
  background-color: #bbd6b8;
  border: 1px solid;
}
</style>
