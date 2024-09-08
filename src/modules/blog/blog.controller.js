import { blogModel } from "../../../database/models/blog.model.js"

const addBlog = async (req,res) =>{


    const { title,description, createdBy} = req.body
    await blogModel.insertMany({title,description, createdBy})

    res.json ({message :"Blog added successfully"})
}


const getAllBlogs = async (req,res) =>{

 let blogs =   await blogModel.find({}).populate('createdBy','name -_id')

 res.json ({message: "All blogs returned successfully",blogs})

}

const getUserBlogs = async (req,res) =>{

    const {id} = req.params
    let blogs = await blogModel.find({createdBy:id})
    if (!blogs){
        res.json({message:"No blog found"})
    } else{
        res.json({message:"All blogs returned sucessfully",blogs})

    }
}

const updateBlog = async (req,res) =>{

    const {title, description,_id} = req.body

    let blog = await blogModel.findById({_id}, {title, description},{new:true})

    if(blog){
        res.json ({message:"Blog updated successfully",blog})

    }else{
        res.json({message: "Blog not found"})
    }

}

const deleteBlog = async (req,res) =>{

    const {_id} = req.body

    let blog = await blogModel.findByIdAndDelete ({_id})

    if(blog){
        res.json ({message: "Blog deleted successfully",blog})

    }else{
        res.json ({message: "Blog not found"})

    }
}

export {addBlog, getAllBlogs,updateBlog, deleteBlog,getUserBlogs}