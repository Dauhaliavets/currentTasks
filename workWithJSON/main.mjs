import data from "./data.json";

const stringify = JSON.stringify(data, null, 2);
const users = JSON.parse(stringify);

const optionsOutput = ['all', 'firstName', 'lastName', 'dateOfBirth', 'knowsAs'];

function customTransformDataToArray(data, option) {

    if(!optionsOutput.includes(option)){
        console.log(`This option: ${option} is undefined`);
        return;
    }

    if(option === optionsOutput[0]){
        return data.users.map(item => {
            return `${item.firstName} ${item.lastName} born at ${item.dateOfBirth} --- ${item.knowsAs}`;
        });
    }

    return data.users.map(item => `${item[option]}`);
}

let transformData;
// transformData = customTransformDataToArray(users, 'all');
transformData = customTransformDataToArray(users, 'firstName');
// transformData = customTransformDataToArray(users, 'lastName');
// transformData = customTransformDataToArray(users, 'dateOfBirth');
// transformData = customTransformDataToArray(users, 'knowsAs');
console.log('transformData: ', transformData);

function showDataFromArray(array){
    if(Array.isArray(array)){
        array.forEach(element => {
            console.log(element);
        });
    }
}

showDataFromArray(transformData);