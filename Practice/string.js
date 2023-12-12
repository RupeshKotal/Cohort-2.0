
// String methods :- length , indexOf , Slice, substring


// 1) length
function getLength(str){
    console.log(`Original string ${str}`);
    console.log(`Length : ${str.length}`);
}

// getLength('Hello world')

//2) indexOf
function getIndexOf(str,target){
console.log(`Original string ${str}`);
console.log(`Index of ${target} :- ` + str.indexOf(target));
}

// getIndexOf("hello world", "world")

// 3) Slice 
function getSlice(str,start,end){
  console.log(`Original string :- ${str}`);
  console.log(`After slice :- ${str.slice(start,end)}`);
}

// getSlice("Hello Rupesh",3,8)

// 4) substring 
function getSubstring(str, start,end){
  console.log(`Original String :- ${str}`);
  console.log(`String after substring :- ${str.substring(start,end)}`);
}

// getSubstring('Hello Brother',2, 8)

// 5) replace 
function replaceString(str,target,replace){
    console.log(`Original String :- ${str}`);
    console.log(`String AFter replace :- ${str.replace(target,replace)}`);
}
// replaceString("Hello Rupesh","Rupesh","Ritsh")

// 6) split 
function splitString(str,separator){
    console.log(`Original String :- ${str}`);
    console.log(`After split ;- ${str.split(separator)}`);
}
splitString('Hey Bro!', '')
splitString("Hello World", " ");



//7) trim

function trimString(str){
    console.log(`Original STring :-${str}`);

    // console.log(`After trim :-${str.trim().replace(/[^a-zA-Z0-9]/g,'')}`);
   
}

// trimString('  Hello world  ')