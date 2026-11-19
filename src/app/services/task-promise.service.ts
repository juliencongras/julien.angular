import { Service, Injectable, inject } from "@angular/core";
import { Database, DatabaseReference, push, ref, remove, update } from "@angular/fire/database";
import { get, set } from "firebase/database";
import { Task } from "../models/task.model";

@Service()
export class TaskPromiseService {
    private readonly database = inject(Database);
    private readonly tasksRef: DatabaseReference = ref(this.database, 'tasks');

    async getTasks(): Promise<Task[]> {
        const  snapshot = await get(this.tasksRef);
        const data = snapshot.val() as Record<string, Omit<Task, 'id'>> | null;

        if(!data){
            return [];
        }

        return Object.entries(data).map(([id, task]) => ({
            id,
            ...task
        }));
    }

    
    async addTask(task: Omit<Task, 'id'>): Promise<void> {
        const newTaskRef = push(this.tasksRef);
        await set(newTaskRef, task);
    }
    

    async updateTask(task: Task): Promise<void> {
        if (!task.id) {
          throw new Error('La tâche doit avoir un ID pour être mise à jour.');
        }

        const { id, ...taskData } = task;
        const taskRef = ref(this.database, `tasks/${id}`);
        await update(taskRef, taskData);
    }

    async deleteTask(taskId: string): Promise<void> {
        if (!taskId) {
            throw new Error('L’ID de la tâche est obligatoire pour la suppression.');
        }

        const taskRef = ref(this.database, `tasks/${taskId}`);
        await remove(taskRef);
    }
}