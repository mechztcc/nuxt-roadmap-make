import { defineStore } from 'pinia'

export const useRoadmapStore = defineStore('roadmapStore', {
  state: () => ({
    content: [] as any[]
   }),
  actions: {
    onPushNewContent(c: any) {
      this.content.push(c)
    }
  }
})
