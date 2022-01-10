const App = {
    data() {
        return {
            title: 'Note list',
            placeholderString: 'Type note text',
            inputValue: '',
            notes: ['note #1', 'note #2']
        }
    },
    methods: {
        inputCHangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        deleteNoteItem(index) {
            this.notes.splice(index, 1)
        }
        
    }
}

const app = Vue.createApp(App)

app.mount('#app')