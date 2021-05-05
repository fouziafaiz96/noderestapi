const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
require("./db/conn");
const Student = require("./models/students");
app.get("/", (req, res) => {
  res.send("RESTFUL API");
});
app.post("/student", (req, res) => {
  console.log(req.body);
  const studentRecord = new Student(req.body);
  studentRecord
    .save()
    .then(() => {
      res.status(201).send(studentRecord);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
  //   res.send("STUDENT CREATED");
});
app.get("/student", async (req, res) => {
  try {
    const data = await Student.find();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
app.get("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Student.findById({ _id: id });
    if (!data) {
      return res.status(404).send(data);
    } else {
      res.send(data);
    }
  } catch (e) {
    res.send(e);
  }
});
app.patch("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const data = await Student.findOneAndUpdate(id, newData, { new: true });

    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
app.delete("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Student.findByIdAndDelete(id);
    if (!id) {
      return res.status(404).send(data);
    }
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
