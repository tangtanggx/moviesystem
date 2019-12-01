import "reflect-metadata";
import { MovieService } from "./services/MovieService";

const m: any = {
    name: "打针唐",
    types: ["高校"],
    areas: ["中国"],
    timeLength: 10
};

MovieService.addMovie(m).then(result => {
    if (Array.isArray(result)) {
        console.log(result);
    } else {
        console.log(result._id);
    }
});
