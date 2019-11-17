import Mongoose from "mongoose";
import { Movie } from "../entities/Movie";

// 必须继承Mongoose.Document
interface IMovie extends Movie, Mongoose.Document { }

// schema 结构

const movieSchema = new Mongoose.Schema<IMovie>({
    name: String,
    types: [String],
    areas: [String],
    timeLength: Number,
    isHot: Boolean,
    isComing: Boolean,
    isClassic: Boolean,
    description: String,
    poster: String
}, {
    versionKey: false
});

export default Mongoose.model<IMovie>("Movie", movieSchema);
