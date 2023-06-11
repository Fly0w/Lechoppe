import { connectToDB } from "@/utils/database";
import Categories from "@/models/categories";

// Endpoint to get the categories from the db
export const GET = async (req) => {
    try {
        await connectToDB();
        console.log("Get categories")

        const categories = await Categories.find()
        
        return new Response(JSON.stringify(categories), {status: 200})

    } catch (error) {
        console.log(error)
    }
}

/* Endpoint for creating a new Subcategory */
export const POST = async (req) => {
    const { category} = await req.json();
    try {
        await connectToDB();

        console.log("Create new category")

        const newCat = new Categories({
            category: category,
            subcategories: []
        })

        await newCat.save()

        return new Response(JSON.stringify(newCat), {status:201})

    } catch (error) {
        return new Response("Failed to create a new Category", { status: 500 })
    }
}

/* Endpoint for creating a new Subcategory */
export const PATCH = async (req) => {
    const { category, subcategory } = await req.json();
    try {
        await connectToDB();

        const subCategoriesDB = await Categories.findOne({category : category})

        console.log("ok api")

        console.log("Create a new subcategory")

        if(subCategoriesDB.subcategories.includes(subcategory)){
            return new Response("Subcategory already exists", { status: 500 })
        }

        subCategoriesDB.subcategories.push(subcategory) 

        

        await subCategoriesDB.save();

        return new Response(JSON.stringify(subCategoriesDB), {status:201})
    } catch (error) {
        return new Response("Failed to create a new SubCategory", { status: 500 })
    }
}
