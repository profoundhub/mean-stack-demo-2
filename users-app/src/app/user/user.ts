export class User {
    // id: string;

    constructor(
        public _id: number = Math.floor(Math.random() * 101),
        public first_name: string = '',
        public last_name: string = '',
        public email: string = '',
        public password: string = '',
        public editable: boolean = false
    ) {}
}
