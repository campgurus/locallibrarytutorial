var Genre = require('../models/genre');

// genre/index
exports.genre_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre list');
};

// genre/shows/:id
exports.genre_details = function(req, res) {
  res.send('NOT IMPLEENTED: Genre detail: ' + req.params.id);
};

// genre/new
exports.genre_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre New GET:');
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};
