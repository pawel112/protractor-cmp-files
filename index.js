function checkFileExists(file) {
    var fs = require('fs');
    fs.stat(file, function(err, stat) {
        if (err == null) {
            return true;
        } else {
            return false;
        }
    });
}

exports.compare = function() {
    var express = require('express');
    var fileComapre = require('file-compare');
    var app = express();

    app.get('', function (req, res) {
        var file1 = req.query.file1;
        var file2 = req.query.file2;

        if ((file1 == null) || (file1 == undefined)) {
            res.send('ERROR: file1 parameter are not exist');
            return;
        }

        if ((file2 == null) || (file2 == undefined)) {
            res.send('ERROR: file2 parameter are not exist');
            return;
        }

        if (checkFileExists(file1) == false) {
            res.send('ERROR: file1 not exist');
            return;
        }

        if (checkFileExists(file2) == false) {
            res.send('ERROR: file2 not exist');
            return;
        }

        if (file1 == file2) {
            res.send('ERROR: choose others filenames.');
            return;
        }

        fileComapre.compare(file1, file2, function(result) {
            if (result) {
                res.send("true");
            } else {
                res.send("false");
            }
        })
    });
    app.listen(8081);
};