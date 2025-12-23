import mongoose from 'mongoose';
const { Schema } = mongoose;

const student = new Schema({
  name : String, 
  rollnumber :{
    type: Number,
    unique:true
  }, 
  subjects : [{
    type: Schema.Types.ObjectId,
    ref:"subject"
  }],
});


export default mongoose.model("student", student);