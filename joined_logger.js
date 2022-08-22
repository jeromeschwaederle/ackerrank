class NotesStore {
  notes = [];

  addNote(state, name) {
    const validStates = ["completed", "active", "others"];
    if (state === "") {
      throw new Error("Name cannot be empty");
    }
    if (state !== "" && !validStates.includes(state)) {
      throw new Error(`Invalid state ${state}`);
    }

    this.notes.push({ state: state, name: name });
  }

  getNotes(state) {
    return this.notes.filter(note => note.state === state);
  }
}

let test = new NotesStore();

test.addNote("active", "oijqfoejfq");
console.log(test.notes);
console.log(test.getNotes("active"));

function joinedLogger(level, sep) {
  const f = (...logs) => {
    let returnString = [];
    logs.map(log => {
      if (log.level >= level) {
        returnString.push(log.text);
      }
    });
    logger({ text: returnString.join(sep) });
  };
  return f;
}
