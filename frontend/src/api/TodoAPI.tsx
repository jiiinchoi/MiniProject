import axios from "axios"
import { Todo } from "../types/Todo"

const API_URL = "http://localhost:8080/api/v1/todos"

export const getTodoList = () => axios.get<Todo[]>(`${API_URL}/list`)
