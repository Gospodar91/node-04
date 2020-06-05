import mongoose, {
    Schema
} from 'mongoose'

const userSchema = new Schema({
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        passwordHash: {
            type: String,
            required: true
        },
        // timestamps:{ createdAt: 'created_at' } //когда создали \обновили
    },{timestamps:{ createdAt: 'created_at' }} 
)


async function findByEmail(email){
    return this.findOne({email})
}



userSchema.statics.findByEmail=findByEmail;

 export const UserModel=mongoose.model('Contacts',userSchema)