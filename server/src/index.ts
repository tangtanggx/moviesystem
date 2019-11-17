import "reflect-metadata";
import { Movie } from "./entities/Movie";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

const m = {
    name: "dsfg",
    types: ["青春"],
    areas: ["中国"],
};

const movie = plainToClass(Movie, m);
console.log(movie);

// validate(movie).then(errors => {
//     console.log(errors);
// });
