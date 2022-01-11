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
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNoteItem(index) {
            this.notes.splice(index, 1)
        }
        
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: { 
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')