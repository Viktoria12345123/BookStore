const { Schema, SchemaTypes: Types, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        default: function () {
            return `User_${new Date().getTime()}`;
        }
    },
    email: {
        type: String,
        required: true
    },
    profilePicture: {
        type:String,
        default: 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-28.jpg'
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    status: {
        type: String,
        default: 'standart'
    },
    description: {
        type: String,
        default: "No description to show yet...",
        maxlength: [500, "Description cannot exceed 500 characters"],
    },
    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    },
    questions: {
        type: [Schema.Types.ObjectId], 
        ref: 'Question',             
        default: []                  
    }
},
    {
        collation: {
            locale: 'en', strength: 2

        }

    })

const User = model('User', userSchema)

module.exports = { User }

