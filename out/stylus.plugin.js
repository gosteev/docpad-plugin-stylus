// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = function(BasePlugin) {
    var StylusPlugin;
    return StylusPlugin = (function(_super) {

      __extends(StylusPlugin, _super);

      function StylusPlugin() {
        return StylusPlugin.__super__.constructor.apply(this, arguments);
      }

      StylusPlugin.prototype.name = 'stylus';

      StylusPlugin.prototype.priority = 725;

      StylusPlugin.prototype.render = function(opts, next) {
        var content, file, inExtension, nib, outExtension, style, stylus, templateData;
        inExtension = opts.inExtension, outExtension = opts.outExtension, templateData = opts.templateData, content = opts.content, file = opts.file;
        if ((inExtension === 'styl' || inExtension === 'stylus') && outExtension === 'css') {
          stylus = require('stylus');
          style = stylus(opts.content).set('filename', file.get('fullPath')).set('compress', this.config.compress);
          if (this.config.useNib) {
            nib = require('nib');
            style.use(nib());
          }
          return style.render(function(err, output) {
            if (err) {
              return next(err);
            }
            opts.content = output;
            return next();
          });
        } else {
          return next();
        }
      };

      return StylusPlugin;

    })(BasePlugin);
  };

}).call(this);