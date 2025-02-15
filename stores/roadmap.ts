import { defineStore } from 'pinia'

export const useRoadmapStore = defineStore('roadmapStore', {
  state: () => ({
    content: [] as any[]
   }),
  actions: {
    onPushNewContent(content: any) {
      this.content.push(content)
    }
  }
})
