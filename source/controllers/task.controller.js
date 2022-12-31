import Task from "../models/Task";

export const renderTask = async (req, res) => {
    const tasks = await Task.find().lean();
    console.log(tasks);
    res.render("index", { tasks: tasks });
    }

export const createTask = async (req, res) => {
    try {
      const task = Task(req.body);
      await task.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }

export const renderEdit = async (req, res) => {
    //Here we get the data of the task that we want to edit
    const task = await Task.findById(req.params.id).lean();
  
    res.render("editing", { task });
  }

export const taskEdit = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  }

export const deleteTask = async (req, res) => {
    const { id } = req.params;
  
    await Task.findByIdAndDelete(id);
  
    res.redirect("/");
  }

export const toogleTask = async(req,res)=>{
    const {id} = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()
    res.redirect("/")
  }