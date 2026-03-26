const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");

module.exports.userSignUp = async(req, res) => {
    const {name, email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({message : "User already exist..."});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = new User({name, email, password : hashedPassword});
        await user.save();
        res.status(200).json({message : "User registerd successfully..."});
    }catch(err){
        console.log(err.message);
    }
}

module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found..." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credential..." });
    }
    return res.json({
      message : "login successfully...",
      user
    });
  } catch (err) {
    console.log(err.message);
  }
};