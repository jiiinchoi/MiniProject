import axios from "axios";
import type { ActionResult } from "~/types/common";
import jwtAxios from "~/util/jwtUtil";
import type { TodoAdd } from "~/types/Todo"; // 필요한 경우 추가

const host = "http://localhost:8080/api/v1/todos";

// ✅ 1. 목록 조회
export async function testTodoList(page: string, size: string) {
    const res = await jwtAxios.get(`${host}/list?page=${page}&size=${size}`);
    return res.data;
}

// ✅ 2. 등록 (비동기 예제용)
export async function testTodoAdd(todo: TodoAdd): Promise<ActionResult<number>> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(todo);
    return { result: "success", data: 123 };
}

// ✅ 3. 등록 (FormData 방식)
export async function testTodoAddForm(formData: FormData): Promise<ActionResult<number>> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(formData);

    const res = await axios.post(`${host}`, formData);
    console.log(res);

    return res.data;
}

// ✅ 4. 수정 (PUT 방식)
export async function testTodoModify(tno: number, formData: FormData): Promise<ActionResult<number>> {
    const res = await axios.put(`${host}/${tno}`, formData);
    return res.data;
}

// ✅ 5. 삭제 (DELETE 방식)
export async function testTodoDelete(tno: number): Promise<ActionResult<number>> {
    const res = await axios.delete(`${host}/${tno}`);
    return res.data;
}
