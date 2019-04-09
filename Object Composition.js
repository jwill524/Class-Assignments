var john = {
    name: 'John',
    address: '1234 dr',
    city: 'Happy Town',
    state: 'NC',
    zipcode: 28262
}

function getProfileUpdate(address,city){
        return {
    address: '1111 rd',
    city: 'wholly Cow Town'
    }
}

function updateProfile(){
return Object.assign( john,getProfileUpdate())
}

//Shows original john object
console.log(john);

//Shows updated john object
updateProfile();
console.log(john);
