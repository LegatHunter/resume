const App = {
    data() {
        return {
            tittle: "Список покупок",
            placeholderString: "Введите название покупки и нажмите Enter",
            inputValue: "",
            notes: [
                {id: 1, text: "Заметка 1"},
                {id: 2, text: "Заметка 2"},
                {id: 3, text: "Заметка 3"}
            ],
            notesDone: [],
            nextId: 4,
        };
    },
    methods: {
        addNewNote() {
            if (this.inputValue === "") return;

            this.notes.push({
                id: this.nextId++,
                text: this.inputValue,
            });
            this.inputValue = "";
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id);
        },
        removeDone(id) {
            this.notesDone = this.notesDone.filter(note => note.id !== id);
        },
        removeNotesAll() {
            this.notes = [];
            this.notesDone = [];
        },
        itemChecked(note, isDone) {
            if (isDone) {
                this.notesDone = this.notesDone.filter(n => n.id !== note.id);
                this.notes.push(note);
            } else {
                this.notes = this.notes.filter(n => n.id !== note.id);
                this.notesDone.push(note);
            }
        }
    },
    computed: {}
};

const app = Vue.createApp(App).mount("#app_todo");
