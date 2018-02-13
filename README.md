# Readme
Compare files by using protractor (is not needed SSH or FTP connection). On client use the protractor-cmp-files-client module.


# Usage
var cmp = require('protractor-cmp-files-server');

cmp.compare (file1, file2);


Return true if file1 and file2 are the same. Otherwise false.
