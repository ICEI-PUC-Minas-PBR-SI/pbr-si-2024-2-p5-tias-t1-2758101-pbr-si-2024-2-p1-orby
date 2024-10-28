import forumService from "../services/forumService.js";

async function createThread(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const thread = await forumService.createThread(body, id);
    return res.status(201).send(thread);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function changeThread(req, res) {
  const body = req.body;
  const { _id: userId } = res.locals.user;
  const { threadId } = req.params;

  try {
    const thread = await forumService.changeThread(body, threadId, userId);
    return res.status(201).send(thread);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function findAllThreads(req, res) {
  try {
    const threads = await forumService.findAllThreads();
    return res.send(threads);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function createReplie(req, res) {
  const body = req.body;
  const { _id: userId } = res.locals.user;
  const { threadId } = req.params;

  try {
    const replie = await forumService.createReplie(body, threadId, userId);
    return res.status(201).send(replie);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function findAllByThread(req, res) {
  const { _id: userId } = res.locals.user;
  const { threadId } = req.params;

  try {
    const replies = await forumService.findAllByThread(threadId, userId);
    return res.send(replies);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default {
  createThread,
  changeThread,
  findAllThreads,
  createReplie,
  findAllByThread,
};
