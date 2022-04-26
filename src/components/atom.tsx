export default function atom(){
    const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
  });