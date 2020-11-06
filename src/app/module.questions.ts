export class Question {
    constructor( public questionDetail: string,
        public options: string[],
        public isAnswered: boolean = false,
        public correctAnswer: string) {}
} 