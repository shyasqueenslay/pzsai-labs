const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Product", // Will use table name `post` as default behaviour.
    tableName: "Product", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
        },
        description: {
            type: "text",
        },
        price: {
            type: "int",
        },
        imgUrl: {
            type: "varchar",
        },
        brand: {
            type: "varchar"
        },
        code: {
            type: "int"
        },
        inventoryCount: {
            type: "int",
        },
        inStock: {
            type: "boolean",
        }
    },
})