import { LEVELS } from "./levels.enum";

export class Taks {
    name="";
    description="";
    completed="";
    leved=LEVELS.NORMAL;

    constructor(name,description,completed,leved){
        this.name=name;
        this.description=description;
        this.completed=completed;
        this.leved=leved;

    }
}