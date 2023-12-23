const fs = require('fs');
// const { writeFile } = require('fs/promises');

fs.readFile('1-file-cleaner.md','utf-8',function(err,data){

    // remove only spaces not line break
    let arr= data.replace(/ +(?!\n)/g,' ');
    console.log(arr)

    // remove \// fom the file 
    let cleaner = arr.replace(/\/\/+/g, '')
    console.log(cleaner)

    // let removeExline = cleaner.replace(/\n{2,}/g, '\n')
    // console.log(removeExline)


    
    fs.writeFile('1-file-cleaner.md',cleaner,'utf-8',(writeErr) =>{
        if(writeErr){
            console.error('Error writing a file :', writeErr)
        }else{
            console.log("file updated successfully");
        }
    }
    )
    
    
     
})


// var inputString = "hello     world    my    name   is       raman";
// var outputString = inputString.replace(/\s+/g, ' ');

// console.log(outputString);



// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman