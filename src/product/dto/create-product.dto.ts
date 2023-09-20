export class CreateProductDto {
    name: string;
    description: string;
    enterprise: {
        idEnterprise: number;
    }
}
