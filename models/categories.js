import { Schema, model, models } from 'mongoose';

const CategoriesSchema = new Schema({
    category: {
        type: String
    },   
    subcategories : {
        type : [String]
    } 
});

const Categories = models.Categories || model("Categories", CategoriesSchema);

export default Categories;