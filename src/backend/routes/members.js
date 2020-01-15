const express = require("express");
const router = express.Router();
const Member = require("../model/members");

// adding a new member
router.post("/members", async (req, res) => {
  const { firstName, lastName, IdNum, phone, email, address } = req.body;
  const member = new Member({
    firstName,
    lastName,
    IdNum,
    phone,
    email,
    address
  });
  // saving to database
  try {
    await member.save();
    res.status(201).json({
      message: "Member saved succesfully"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error
    });
  }
});

// getting members from the database
router.get("/members", async (req, res) => {
  try {
    const results = await Member.find();
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// getting a particular member from the database
router.get("/members/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Member.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

// edit a particular member
router.put("/members/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const member = await Member.findById(id).exec();
    member.set(req.body);
    const result = member.save();
    res.status(201).json({
      message: "Update Succesfully",
      result
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete a particular member
router.delete("/members/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await Member.findByIdAndDelete(id);
    res.status(200).json({
      message: "Delete Succesfully"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

module.exports = router;
