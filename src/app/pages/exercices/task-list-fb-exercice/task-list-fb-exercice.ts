import { inject, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TaskPromiseService } from "../../../services/task-promise.service";
import { Task } from "../../../models/task.model";

export class TaskListFbExercice implements OnInit{
    private readonly promisedTask = inject(TaskPromiseService);

    tasks = signal<Task[]>([]);
    newTaskTitle = signal<string>("");

    async ngOnInit(): Promise<void> {
        await this.loadTasks();
    }

    async loadTasks(): Promise<void>{
        try {
            
        } catch (error) {
            
        }
    }
}