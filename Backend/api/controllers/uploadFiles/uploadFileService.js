const _ = require('lodash')

function getFiles(req, res){            
    res.json({
        'message': req.files
    });
}

function postFiles(req, res){
    console.log(req.files)
    res.json({
        'message': 'File uploaded successfully',
        'file':req.files
    });    
}

    
module.exports = {getFiles, postFiles}