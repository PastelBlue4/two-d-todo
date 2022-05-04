function atom() {}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export default atom();
