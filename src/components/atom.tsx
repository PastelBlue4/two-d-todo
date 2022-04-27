interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";

export default function atom(){
 
  }

    const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
  });