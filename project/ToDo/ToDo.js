const App = {
    data() {
        return {
            tittle: "Список заметок",
            placeholderString: "Введите название заметки и нажмите Enter",
            inputValue: "",
            notes: [],
            notesDone: [],
            nextId: 1,
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
            this.saveToLocalStorage();
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id);
            this.saveToLocalStorage();
        },
        removeDone(id) {
            this.notesDone = this.notesDone.filter(note => note.id !== id);
            this.saveToLocalStorage();
        },
        removeNotesAll() {
            this.notes = [];
            this.notesDone = [];
            this.saveToLocalStorage();
        },
        itemChecked(note, isDone) {
            if (isDone) {
                this.notesDone = this.notesDone.filter(n => n.id !== note.id);
                this.notes.push(note);
            } else {
                this.notes = this.notes.filter(n => n.id !== note.id);
                this.notesDone.push(note);
            }
            this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('notes', JSON.stringify(this.notes));
            localStorage.setItem('notesDone', JSON.stringify(this.notesDone));
            localStorage.setItem('nextId', this.nextId);
        },
        loadFromLocalStorage() {
            const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
            const savedNotesDone = JSON.parse(localStorage.getItem('notesDone')) || [];
            const savedNextId = JSON.parse(localStorage.getItem('nextId')) || 4;
            this.notes = savedNotes;
            this.notesDone = savedNotesDone;
            this.nextId = savedNextId;
        }
    },
    mounted() {
        this.loadFromLocalStorage();
    }
}

const app = Vue.createApp(App).mount("#app_todo");