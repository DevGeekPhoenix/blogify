import express from "express";

import Blog from "../models/Blog";

import AuthorizeUser from "../lib/auth";
import User from "../models/User";

const router = express.Router();

router.post("/write", async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.content || !req.body.imgurl)
      return res.status(522).json({ msg: "bad request" });

    const thisUser = await AuthorizeUser(req.user);

    if (!thisUser || !thisUser._id) throw new Error("not logged in");

    const thisBlog = await Blog.create({
      ...req.body,
      creatorId: thisUser._id,
    });

    res.status(200).json({ msg: "ok", _id: thisBlog._id });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  const obj = {};
  users.forEach((user) => (obj[user._id] = user));
  const blogs = await Blog.findAll();
  blogs.forEach((blog) => (blog.creator = obj[blog.creatorId]));
  res.json(blogs);
});

router.get("/:_id", async (req, res, next) => {
  const thisBlog = await Blog.findById(req.params._id);
  if (!thisBlog) return res.status(500).json({ msg: "bad request" });
  const thisUser = await User.findById(thisBlog.creatorId);
  thisBlog.creator = thisUser;
  return res.json(thisBlog);
});

router.post("/my-blogs", async (req, res, next) => {
  console.log("what?");
  try {
    console.log("req.user", req.user);
    const thisUser = await AuthorizeUser(req.user);
    console.log(thisUser);
    if (!thisUser || !thisUser._id) throw new Error("unathorized");

    return res.json(await Blog.getBlogsByUserID(thisUser._id));
    // return
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.post("/by-user", async (req, res, next) => {
  try {
    const thisUser = await User.findById(req.body._id);

    if (!thisUser || !thisUser._id)
      return res.status(500).json({ msg: "bad request" });

    return res.json(await Blog.getBlogsByUserID(thisUser._id));
    // return getBlogsByUserID(thisUser._id)
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.post("/edit", async (req, res, next) => {
  try {
    if (!req.body.blogId || !req.body.data) throw new Error("bad request");

    const realData = {
      title: req.body.data.title,
      content: req.body.data.content,
      imgurl: req.body.data.imgurl,
    };

    const thisUser = await AuthorizeUser(req.user);
    const thisBlog = await Blog.findById(req.body.blogId);

    if (thisBlog.creatorId !== thisUser._id) throw new Error("unathorized");

    await Blog.findByIdAndUpdate(thisBlog._id, realData);

    return res.status(200).json({ msg: "ok" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

export default router;
