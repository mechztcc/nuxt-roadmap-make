import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore',{
  state: () => ({ 
    visible: false,
    body: null as any
  }),
  actions: {
    onHandle() {
      this.visible = !this.visible
    },
    onClose() {
      this.visible = false;
    },
    onShowContent(body: any) {
      this.body = body;
      this.onHandle();
    }
  }
})

