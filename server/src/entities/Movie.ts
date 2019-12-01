import { IsNotEmpty, ArrayMinSize, IsInt, Min, Max, IsArray, validate } from "class-validator";
import { Type, plainToClass } from "class-transformer";

export class Movie {
    @IsNotEmpty({ message: "电影名称不能为空" })
    @Type(() => String)
    public name: string;

    @IsNotEmpty({ message: "电影类型不能为空" })
    @ArrayMinSize(1, { message: "电影类型长度至少为1" })
    @IsArray({ message: "电影类型必须是数组" })
    @Type(() => String)
    public types: string[];

    @IsNotEmpty({ message: "上映地区不能为空" })
    @ArrayMinSize(1, { message: "上映地区长度至少为1" })
    @IsArray({ message: "上映地区必须是数组" })
    @Type(() => String)
    public areas: string[];

    @IsNotEmpty({ message: "时长不能为空" })
    @IsInt({ message: "时长必须是整数" })
    @Min(1, { message: "时长不能小于1分钟" })
    @Max(9999, { message: "时长过长" })
    @Type(() => Number)
    public timeLength: string;

    @IsNotEmpty({ message: "是否热映不可为空" })
    @Type(() => Boolean)
    public isHot: boolean = false;

    @IsNotEmpty({ message: "是否即将上映不可为空" })
    @Type(() => Boolean)
    public isComing: boolean = false;

    @IsNotEmpty({ message: "是否经典不可为空" })
    @Type(() => Boolean)
    public isClassic: boolean = false;

    @Type(() => String)
    public description?: string;

    @Type(() => String)
    public poster?: string;

    /** 验证当前电影对象 */
    public async validateMovie(): Promise<string[]> {
        const errors = await validate(this);

        const result: string[] = [];

        errors.map(err => Object.values(err.constraints)).forEach(arr => {
            result.push(...arr);
        });

        return result;
    }

    /** 将平面对象转化为Movie类对象 */
    public static transform(plainObject: object): Movie {
        if (plainObject instanceof Movie) {
            // 本身是Movie对象直接返回
            return plainObject;
        }
        return plainToClass(Movie, plainObject);
    }
}
