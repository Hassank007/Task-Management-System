import express, { request, response } from "express";
import { Task } from "../models/TaskModel.js";
import { User } from "../models/Usermodel.js";
import bcrypt from "bcrypt";

const router = express.Router();

//Route to login
router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  User.findOne({ email: email }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            response.json("Success");
          } else {
            response.json("Password in incorrect");
          }
        })
    } else {
      response.json("No user exist")
    }
  });
});
//Route to signup
router.post("/signup", async (request, response) => {
  try {
    if (!request.body.name || !request.body.email || !request.body.password) {
      return response.status(400).send({
        message: "Send all required fields: name, email, password",
      });
    }
    const { name, email, password } = request.body;
    bcrypt.hash(password, 10).then((hash) => {
      const user = User.create({ name, email, password: hash });

      return response.status(201).send(user);
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Save a new Task
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.publishDate ||
      !request.body.status
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newTask = {
      title: request.body.title,
      description: request.body.description,
      publishDate: request.body.publishDate,
      status: request.body.status,
    };

    const task = await Task.create(newTask);

    return response.status(201).send(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Tasks from database
router.get("/", async (request, response) => {
  try {
    const task = await Task.find({});

    return response.status(200).json({
      count: task.length,
      data: task,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Task from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const task = await Task.findById(id);

    return response.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Task
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.publishDate ||
      !request.body.status
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = request.params;

    const result = await Task.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }

    return response.status(200).send({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Task
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Task.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }

    return response.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
