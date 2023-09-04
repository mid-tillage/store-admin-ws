/* eslint-disable */
export default async () => {
    const t = {
        ["./product/entities/dim-product.entity"]: await import("./product/entities/dim-product.entity"),
        ["./product/dto/product-response.dto"]: await import("./product/dto/product-response.dto"),
        ["./product-on-sale/entities/fact-product-on-sale.entity"]: await import("./product-on-sale/entities/fact-product-on-sale.entity"),
        ["./catalog/entities/dim-product-catalog.entity"]: await import("./catalog/entities/dim-product-catalog.entity"),
        ["./enterprise/entities/dim-enterprise.entity"]: await import("./enterprise/entities/dim-enterprise.entity")
    };
    return {
        "@nestjs/swagger": {
            "models": [[
                import("./product/dto/create-product.dto"),
                {
                    "CreateProductDto":
                        { name: { required: true, type: () => String }, description: { required: true, type: () => String } }
                }], [import("./product/dto/update-product.dto"), { "UpdateProductDto": {} }], [import("./enterprise/entities/dim-enterprise.entity"), { "DimEnterprise": { idEnterprise: { required: true, type: () => Number }, name: { required: true, type: () => String }, dimProducts: { required: true, type: () => [t["./product/entities/dim-product.entity"].DimProduct] } } }], [import("./catalog/entities/dim-product-catalog.entity"), { "DimProductCatalog": { idProductCatalog: { required: true, type: () => Number }, name: { required: true, type: () => String }, factProductOnSales: { required: true, type: () => [t["./product-on-sale/entities/fact-product-on-sale.entity"].FactProductOnSale] } } }], [import("./product-on-sale/entities/fact-product-on-sale.entity"), { "FactProductOnSale": { idProductOnSale: { required: true, type: () => Number }, price: { required: true, type: () => Number }, creationDatetime: { required: true, type: () => Date }, saleStartDatetime: { required: true, type: () => Date }, saleEndDatetime: { required: true, type: () => Date }, idProduct: { required: true, type: () => t["./product/entities/dim-product.entity"].DimProduct }, idProductCatalog: { required: true, type: () => t["./catalog/entities/dim-product-catalog.entity"].DimProductCatalog } } }], [import("./product/entities/dim-product.entity"), { "DimProduct": { idProduct: { required: true, type: () => Number }, name: { required: true, type: () => String, nullable: true }, description: { required: true, type: () => String }, creationDatetime: { required: true, type: () => Date }, idEnterprise: { required: true, type: () => t["./enterprise/entities/dim-enterprise.entity"].DimEnterprise }, factProductOnSales: { required: true, type: () => [t["./product-on-sale/entities/fact-product-on-sale.entity"].FactProductOnSale] } } }], [import("./catalog/dto/create-catalog.dto"), { "CreateCatalogDto": {} }], [import("./catalog/dto/update-catalog.dto"), { "UpdateCatalogDto": {} }], [import("./enterprise/dto/create-enterprise.dto"), { "CreateEnterpriseDto": {} }], [import("./enterprise/dto/update-enterprise.dto"), { "UpdateEnterpriseDto": {} }], [import("./enterprise/entities/enterprise.entity"), { "Enterprise": {} }], [import("./product-on-sale/dto/create-product-on-sale.dto"), { "CreateProductOnSaleDto": {} }], [import("./product-on-sale/dto/update-product-on-sale.dto"), { "UpdateProductOnSaleDto": {} }], [import("./catalog/entities/catalog.entity"), { "Catalog": {} }], [import("./product-on-sale/entities/product-on-sale.entity"), { "ProductOnSale": {} }]],
            "controllers":
                [
                    [
                        import("./app.controller"), { "AppController": { "getHello": { type: String } } }
                    ], [
                        import("./product/product.controller"),
                        {
                            "ProductController": {
                                "create": { type: t["./product/dto/product-response.dto"].ProductResponse },
                                "findAll": { type: t["./product/entities/dim-product.entity"].DimProduct },
                                "findOne": { type: t["./product/entities/dim-product.entity"].DimProduct },
                                "update": { type: t["./product/entities/dim-product.entity"].DimProduct },
                                "remove": { type: t["./product/entities/dim-product.entity"].DimProduct }
                            }
                        }],
                    [
                        import("./catalog/catalog.controller"),
                        {
                            "CatalogController": {
                                "create": { type: t["./catalog/entities/dim-product-catalog.entity"].DimProductCatalog },
                                "findAll": { type: [t["./catalog/entities/dim-product-catalog.entity"].DimProductCatalog] },
                                "findOne": { type: [t["./catalog/entities/dim-product-catalog.entity"].DimProductCatalog] }, "update": {}, "remove": { type: [t["./catalog/entities/dim-product-catalog.entity"].DimProductCatalog] }
                            }
                        }], [import("./enterprise/enterprise.controller"), { "EnterpriseController": { "create": { type: t["./enterprise/entities/dim-enterprise.entity"].DimEnterprise }, "findAll": { type: [t["./enterprise/entities/dim-enterprise.entity"].DimEnterprise] }, "findOne": { type: t["./enterprise/entities/dim-enterprise.entity"].DimEnterprise }, "update": {}, "remove": { type: [t["./enterprise/entities/dim-enterprise.entity"].DimEnterprise] } } }], [import("./product-on-sale/product-on-sale.controller"), { "ProductOnSaleController": { "create": { type: t["./product-on-sale/entities/fact-product-on-sale.entity"].FactProductOnSale }, "findAll": { type: [t["./product-on-sale/entities/fact-product-on-sale.entity"].FactProductOnSale] }, "findOne": { type: t["./product-on-sale/entities/fact-product-on-sale.entity"].FactProductOnSale }, "update": {}, "remove": { type: t["./product-on-sale/entities/fact-product-on-sale.entity"].FactProductOnSale } } }]]
        }
    };
};