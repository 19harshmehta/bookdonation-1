const ItemModel = require("../model/itemModel")
const CategoryModel = require("../model/categoryModel")

module.exports.addItem = async function(req, res) 
{
    let categoryName = req.body.categoryName
    let itemName = req.body.itemName
    let activeInd = req.body.activeInd


    let categoryId; // Declare it in a higher scope

try {
    const data = await CategoryModel.findOne({ categoryName: categoryName });
    categoryId = data._id;
    // res.json({ "msg": "Added", "data": data, "rcode": 200 });
} catch (err) {
    res.json({ "msg": "No Rec Found", "data": err, "rcode": -9 });
}
 const newItem = {
    "itemName":itemName,
    "activeInd":activeInd,
    "categoryId":categoryId
 }

let item = new ItemModel(newItem)
let data = await item.save()

res.json({data:data,msg:"item Added",rcode:200})

}
//getAllItems
module.exports.getAllItems = function(req,res){
    ItemModel.find().then(data=>{
      res.json({data:data,msg:"Item Retrived",rcode:200})
    })
}

//delete item by id
module.exports.deleteItemById = function(req,res)
{
    let itemId = req.params.itemId

    console.log("ItemID = ",itemId)

    ItemModel.deleteOne({_id:itemId}).then((data)=>{
      res.json({ "msg":"Item Deleted" , "data":data , "rcode":200})
    }).catch((err)=>{
      res.json({ "msg":"No Rec Found" , "data":err , "rcode":-9})
    })
     
}