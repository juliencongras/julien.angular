import { Component, input, output, signal } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-tp-user-data',
    templateUrl: './tp-user-data.html',
})
export class TpUserData {
    userName = signal<string>("Bob");
    userAge = signal<number>(20);

    readonly userDataEmitUpdate = output<TpUserModel>();

    validateForm(): void {
        
    }
}
