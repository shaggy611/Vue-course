const App = {
    data() {
        return {
            title: 'TODO',
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
        },
        markDone(event) {
            if(event.target.checked) {
                event.target.nextElementSibling.classList.add('marked')
            }
            else {
                event.target.nextElementSibling.classList.remove('marked')
            }
        }
        
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: { 
        inputValue(value) {
            if(value.length > 70) {
                this.inputValue = ''
            }
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')