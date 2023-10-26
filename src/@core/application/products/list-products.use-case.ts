import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

export class ListProductUseCase {
    constructor(private productGateway: ProductGateway) {}

    async execute(): Promise<Product[]> {
        return await this.productGateway.findAll()
    }
}