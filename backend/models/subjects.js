import mongoose from "mongoose";
const { Schema } = mongoose;

const subject = new Schema({
  sub_name: String,
  sub_code : Number,
  sub_credit : Number,
  student: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
});

export default mongoose.model("subject", subject);
