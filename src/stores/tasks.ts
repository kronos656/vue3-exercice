import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskstore = defineStore('tasks', () => {
  const tasks = ref([])
  function addTask(task: string) {
  }

  return { tasks, addTask }
})
