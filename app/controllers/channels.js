'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Channel = models.channel;

const authenticate = require('./concerns/authenticate');
const setUser = require('./concerns/set-current-user');
const setModel = require('./concerns/set-mongoose-model');

const index = (req, res, next) => {
  Channel.find()
    .then(channels => res.json({
      channels: channels.map((e) =>
        e.toJSON({ virtuals: true, user: req.user })),
    }))
    .catch(next);
};

const show = (req, res) => {
  res.json({
    channel: req.channel.toJSON({ virtuals: true, user: req.user }),
  });
};

const create = (req, res, next) => {
  let channel = Object.assign(req.body.channel, {
    _owner: req.user._id,
  });
  Channel.create(channel)
    .then(channel =>
      res.status(201)
        .json({
          channel: channel.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next);
};

const update = (req, res, next) => {
  delete req.body._owner;  // disallow owner reassignment.
  req.channel.update(req.body.channel)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const destroy = (req, res, next) => {
  req.channel.remove()
    .then(() => res.sendStatus(204))
    .catch(next);
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Channel), only: ['show'] },
  { method: setModel(Channel, { forUser: true }), only: ['update', 'destroy'] },
], });
