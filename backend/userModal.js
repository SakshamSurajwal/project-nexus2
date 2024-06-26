const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');

const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type: Number,
        required:true,
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps:true
});

userSchema.methods.matchPassword=async function(passwordEntered){
    return await bcryptjs.compare(passwordEntered,this.password);
}

userSchema.pre('save',async function (next){
    if(!this.isModified) next();

    const salt=await bcryptjs.genSalt(10);
    this.password=await bcryptjs.hash(this.password,salt);
})

const User=mongoose.model(`User`,userSchema);
module.exports=User;