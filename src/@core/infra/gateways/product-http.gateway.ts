import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";
import { AxiosInstance } from "axios";

export class ProductHttpGateway {
    constructor(private http: AxiosInstance) { }

    findAll(): Promise<Product[]> {
        return this.http.get<Product[]>('/products').then(
            (res) =>
                res.data.map(data => new Product({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    price: data.price
                })))
    };

    findById(id: number): Promise<Product> {
        return this.http.get<Product>(`/products/${id}`).then((res) => {
            return new Product({
                id: res.data.id,
                name: res.data.name,
                description: res.data.description,
                price: res.data.price
            });
        });
    }
}