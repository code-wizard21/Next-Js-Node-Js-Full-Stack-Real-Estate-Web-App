import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
    },
    message: {
      type: String,
      required: [true, "Message is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
