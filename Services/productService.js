const Product = require('../Models/productsModel');
const Category = require("../Models/categoryMode");


const createProduct = async (reqData) => {

    let topLavel = await Category.findOne({ name: reqData.topLavelCategory });

    if (!topLavel) {
        topLavel = new Category({
            name: reqData.topLavelCategory,
            level: 1
        })
        return topLavel.save();
    }

    let secondLavel = await new Category.findOne({
        name: reqData.secondLavelCategory,
        parentCategory: topLavel._id
    })

    if (!secondLavel) {
        secondLavel = new Category({
            name: reqData.secondLavelCategory,
            parentCategory: topLavel._id,
            level: 2
        })

        return secondLavel.save()
    }


    const thirdLavel = await Category.findOne({
        name: reqData.thirdLavelCategory,
        parentCategory: secondLavel._id,
    })

    if (!thirdLavel) {
        thirdLavel = new Category({
            name: reqData.thirdLavelCategory,
            parentCategory: secondLavel._id,
            level: 3

        })

        return thirdLavel.save()
    }


    const product = new Product({
        title: reqData.title,
        brand: reqData.brand,
        description: reqData.description,
        sizes: reqData.size,
        colors: reqData.color,
        discountedPrice: reqData.discountedPrice,
        discountPersent: reqData.discountPersent,
        imageUrl: reqData.imageUrl,
        quantity: reqData.quantity,
        category: reqData.thirdLavel._id
    })

    return await product.save();

}



module.exports = { createProduct }


