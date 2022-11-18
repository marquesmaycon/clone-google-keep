// Elements
const notesContainer = document.querySelector('#notes-container');
const noteInput = document.querySelector('#note-content');
const addNoteBtn = document.querySelector('#add-note-btn');

function generateId() {
    return Math.floor(Math.random() * 3000);
}

function addNote() {
    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };
    const noteElement = createNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement)
}

function createNote(id, content, fixed) {
    const textarea = document.createElement('textarea');
    textarea.value = content;
    textarea.placeholder = 'Adicione algum texto...'

    const element = document.createElement('div');
    element.classList.add('note');
    element.appendChild(textarea);

    return element;
}

// Events
addNoteBtn.addEventListener('click', addNote)