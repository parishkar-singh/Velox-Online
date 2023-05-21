import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ProductDocument} from "./product.schema";
import {Model} from "mongoose";
@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<ProductDocument>) {
    }
    async create (name: string, price: number, description?: string): Promise<ProductDocument> {
        const newProduct = new this.productModel({name, price, description});
        return newProduct.save();
    }

    async find(id:string): Promise<ProductDocument> {
        return this.productModel.findById(id).exec();
    }
    async findAll(): Promise<ProductDocument[]> {
        return this.productModel.find().exec();
    }

}
