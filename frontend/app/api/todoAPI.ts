import axios from "axios";
import type {ActionResult} from "~/types/common";
import jwtAxios from "~/util/jwtUtil";

const host = "http://localhost:8080/api/v1/todos"

//Create
export async function addTodoForm(formData: FormData): Promise<ActionResult<number>>{
    const res = await axios.post(`${host}`, formData);
    console.log(res)
    return res.data
}

//Read(페이징)
export async function TodoList(page:string, size:string){
    const res = await jwtAxios.get(`${host}/list?page=${page}&size=${size}`)
    return res.data
}

//Read
export async function getTodo(tno:number): Promise<Todo>{
    const res = await jwtAxios.get(`${host}/read/${tno}`);
    return res.data.data;
}

//Update
export async function editTodoForm(formData: FormData): Promise<ActionResult<number>>{

    const res = await jwtAxios.post(`${host}/modify`,formData);
    return res.data;
}

//Delete
export async function  deleteTodo(tno:number): Promise<ActionResult<number>>{

    const res = await jwtAxios.delete(`${host}/${tno}`);
    return res.data
}