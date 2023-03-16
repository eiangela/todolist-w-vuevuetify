// Utilities
import { defineStore } from 'pinia'
import { reactive, toRefs } from "vue";

export const useAppStore = defineStore('app', () => {
  const state = reactive({
    drawer: null,
    file: "",
    files: [],
  });

  function addTask(file) {
    console.log(file); // adicione esta linha
    if (!file) { // Se o "file" não for vazio "", adicione a task
      state.files.push({
        name: file,
        done: false,
      });
    } else {
      // Se for vazio, mostre o alert
      alert("Campo vazio! Por favor, digite o nome da tarefa.");
    }
  }

  function getIndex(file) {
    let index = state.files.findIndex((item) => item.name === file.name);
    return index;
  }

  function remove(file) {
    if (!file.done) {
      let index = getIndex(file);
      state.files.splice(index, 1);
    } else {
      alert(
        "Esta tarefa já foi concluída e não pode ser excluída."
      );
    }
  }

  function completeTask(file) {
    file.done = !file.done;
  }

  function changeIcon(file) {
    file.icone = true;
  }

  return {
    ...toRefs(state),
    addTask,
    remove,
    completeTask,
    changeIcon,
  };
});