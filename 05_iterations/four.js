const myObject = {
    js: 'javascript',
    cpp:'C++',
    rb:"ruby",
    swift: "swift by apple"
}

//forin loop

for (const key in myObject) {
    console.log(key);
    
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}