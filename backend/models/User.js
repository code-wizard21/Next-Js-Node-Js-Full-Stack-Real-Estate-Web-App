import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 6,
      // when u return a user on api, we dont wanna see password so select:false
      select: false,
    },
    phoneNumber: {
      type: String,
      minlength: 6,
      maxlength: 15,
    },
    role: {
      type: String,
      enum: ["user", "realtor", "admin"],
      default: "user",
    },
    // photo: {
    //   type: String,
    //   required: function () {
    //     return this.role === "realtor";
    //   },
    // },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Register isleminde formdan kullanıcının girdiği password u bcrypt ile burda crypt ediyoruz;
userSchema.pre("save", async function (next) {
  // user update isleminde password modify edilmeyecegi icin bunu yazdıkki alttaki kodu atlasın.
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Login işleminde girilen password doğrumu kontrolü için burda metot yazdık;
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Sign JWT and return;
userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);

export default User;
