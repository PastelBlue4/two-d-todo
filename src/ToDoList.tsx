import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [errorCheck, setErrorCheck] = useState("");

//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//     console.log(toDo);
//     setErrorCheck("");
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//     if (toDo.length < 10) {
//       return setErrorCheck("제목은 10글자 이상 작성해주세요.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           placeholder="할 일을 추가하세요."
//         />
//         <button>추가</button>
//         {errorCheck == "" ? null : errorCheck}
//       </form>
//     </div>
//   );
}

function ToDoList(){
    const {register, watch, handleSubmit} =useForm();
    console.log(watch());
    return(
        <div>
            <form>
                <input {...register("title")}placeholder="제목을 작성하세요." />
                <button>추가</button>
            </form>
            <form>
                <input {...register("title")}placeholder="제목을 작성하세요." />
                <button>추가</button>
            </form>
            <form>
                <input {...register("title")}placeholder="제목을 작성하세요." />
                <button>추가</button>
            </form>
        </div>
    )
}

export default ToDoList;
