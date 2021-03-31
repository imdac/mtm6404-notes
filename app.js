const app = Vue.createApp({
  data: function () {
    return {
      notes: [
        { title: 'Note 1', text: 'This is note 1' }
      ],
      view: 'notes',
      title: '',
      text: ''
    }
  },
  computed: {
    note: function () {
      return this.notes[0]
    }
  },
  methods: {
    setView: function (view) {
      this.view = view
    }
  }
})

const vm = app.mount('#app')
