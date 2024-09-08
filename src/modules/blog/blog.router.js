


import express  from 'express'
import { addBlog, deleteBlog, getAllBlogs, getUserBlogs, updateBlog } from './blog.controller.js';
const blogRouter =express.Router ()

blogRouter.post('/addBlog',addBlog)
blogRouter.get('/getAllBlogs',getAllBlogs)
blogRouter.get('/id',getUserBlogs)
blogRouter.put('/',updateBlog)
blogRouter.delete('/',deleteBlog)

export default blogRouter;