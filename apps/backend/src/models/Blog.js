import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    dataHoraPublicacao: {
        type: Date,
        required: false,
    },
    banner: {
        type: String,
        required: true,
    },
    conteudo: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;