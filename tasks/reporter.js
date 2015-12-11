

'use strict';
var fs = require("fs"),
    http = require('http'),
    url = require('url'),
    ejs = require('ejs'),
    stylelint = require("stylelint");

module.exports = function(grunt) {
    grunt.registerTask('reporter', 'stylelint htmlreporter plugin', function() {
        var done = this.async();
        var options = this.options({
          temp: 'test/template.ejs',
          files: 'test/test.css',
          syntax: 'css',
          ports: 5963,
          outputJson:{
              flag:false,
              path:'test/test.json'
          }
        });

        stylelint.lint({
            files: options.files,
            formatter:"json",
            syntax:options.syntax
        }).then(function(data) {
            if(options.outputJson.flag){
                fs.writeFile(options.outputJson.path, data.output , function (err) {
                    if(err) {
                        console.log(err + 'json writeFile error');
                    } else {
                        console.log('json writeFile success');
                    }
                });
            }
            var templateFile = fs.readFileSync(options.temp, 'utf8');
            var server = http.createServer();
            server.on('request', doRequest);
            server.listen(options.ports,function(){
                console.log('Hit CTRL-C to stop the server');

            });
            process.on('SIGINT', function () {
                console.log('http-server stopped');
                server.close();
                done();
                process.exit();
            });
            function doRequest(req, res){
                var tmp = ejs.render(templateFile, {
                    title:'stylelint result',
                    jsondata: data.results
                });
                res.setHeader('Content-Type', 'text/html');
                res.write(tmp);
                res.end();
            }
            done();
        }).catch(function(err) {
            console.log("error");
            console.error(err.stack);
        });

    });
};
