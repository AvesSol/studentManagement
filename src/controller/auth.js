const Student = require("../models/Student")

exports.create = async (req, res) => {
  try {
    const {
      name,
      lName,
      fatherName,
      email,
      id,
      age,
      cast,
      religion,
      pcb,
      address,
      contact,
    } = req.body;

   

    if (
      !name ||
      !lName ||
      ! age ||
      !fatherName ||
      !email ||
      !id || 
      !cast ||
      !religion ||
      !pcb ||
      !address ||
      !contact
    ) {
      return res.send("Please fill all the Detials");
    }

    const isUserExist = await Student.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        success: false,
        msg: "You already exist",
      });
    }

    const response = await Student.create({
      name,
      lName,
      fatherName,
      email,
      id,
      age,
      cast,
      religion,
      pcb,
      address,
      contact
    });

    res.status(200).redirect("http://localhost:4000/");
  } catch (e) {
    console.log("Error in Create ", e);
    res.status(200).json({
      success: false,
      msg: "Student Not Created ",
    });
  }
};

exports.get = async (req, res) => {
  try {
    const stud = await Student.find({});

    res.status(200).json({
      msg: "success",
      data: stud,
    });
  } catch (e) {
    console.log("Error occured while fetching Employe info ", e);
    res.status(200).json({
      success: false,
      msg: "NOt fetched Data",
    });
  }
};


exports.getSingleUser = async (req, res) => {
  console.log("Here i am")
  try {
    const id  = req.params.id;
    const stud = await Student.findOne({_id:id});
    // console.log(stud)
    res.status(200).json({
      msg: "success",
      data: stud,
    });
  } catch (e) {
    console.log("Error occured while fetching Employe info ", e);
    res.status(200).json({
      success: false,
      msg: "NOt fetched Data",
    });
  }
};

