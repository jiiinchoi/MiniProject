import jwtAxios from "../util/jwtUtil";
import { PageResponse, TodoAdd, todoDTO } from "../types/Todo";

const HOST: string = import.meta.env.VITE_API_SERVER;

// Create
export async function addTodo(todo: TodoAdd): Promise<number> {
    const res = await jwtAxios.post(`${HOST}`, todo);
    return res.data;
}

// Read
export async function getTodo(tno: number): Promise<todoDTO> {
    const res = await jwtAxios.get(`${HOST}/${tno}`);
    return res.data;
}

// Read - List
export async function getTodoList(page: number = 1, size: number = 10): Promise<PageResponse<todoDTO>> {
    const param = { page, size };
    const res = await jwtAxios.get(`${HOST}/list`, { params: param });
    return res.data;
}

// Update
export async function updateTodo(tno: number, title: string): Promise<todoDTO> {
    const res = await jwtAxios.put(`${HOST}/${tno}`, { title, tno });
    return res.data;
}

// Delete
export async function deleteTodo(tno: number): Promise<void> {
    await jwtAxios.delete(`${HOST}/${tno}`);
}
