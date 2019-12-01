import { Movie } from "../entities/Movie";
import { IMovie } from "../db/MovieSchema";
import { MovieModel } from "../db";

export class MovieService {
    // 都写成静态方法，没有必要构建对象
    public static async addMovie(movie: Movie): Promise<IMovie | string[]> {
        // 1. 转换类型
        movie = Movie.transform(movie);
        // 2. 数据验证
        const errs = await movie.validateMovie();
        if (errs.length > 0) { return errs; }
        // 3. 添加到数据库
        return await MovieModel.create(movie);
    }
}
