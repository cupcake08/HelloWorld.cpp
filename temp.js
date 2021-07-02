

// [
//     [C1, Customer One, one@customer.com, '17-09-1976', 'AIGHJ7'],
//   [C2, Customer Two, two@customer.com, '12-11-1991', 'AIGXXXX54G']
//   ...
// ]
//create it into batches of 10
const chunkSize = 10;
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatedate(dateString){      
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
          
    // Match the date format through regular expression      
    if(dateString.match(dateformat)){      
        let operator = dateString.split('/');      
      
        // Extract the string into month, date and year      
        let datepart = [];      
        if (operator.length>1){      
            pdatepart = dateString.split('/');      
        }      
        let month= parseInt(datepart[0]);      
        let day = parseInt(datepart[1]);      
        let year = parseInt(datepart[2]);      
              
        // Create list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
        if (month==1 || month>2){      
            if (day>ListofDays[month-1]){      
                ///This check is for Confirming that the date is not out of its range      
                return false;      
            }      
        }else if (month==2){      
            let leapYear = false;      
            if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                leapYear = true;      
            }      
            if ((leapYear == false) && (day>=29)){      
                return false;      
            }else      
            if ((leapYear==true) && (day>29)){      
                console.log('Invalid date format!');      
                return false;      
            }      
        }      
    }else{      
        console.log("Invalid date format!");      
        return false;      
    }      
    return true;      
}
let arr = [["C1", "Customer One", "one@customer.com", "12/11/1977", "AIGHJ75"],
    ["C2", "Customer Two", "two@customer.com", "12/11/1978", "AIGXXXX54G"]
];
const groups = arr.map((e, i) => { 
     return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
}).filter(e => { return e; });
// console.log(groups);
let finalData=[];
let success=0;
let invalid = 0;
for(let i=0;i<groups.length;i++){
    // console.log("i",i);
    let currArray = groups[i];
    // console.log(currArray);
    let temp = currArray;
    console.log(currArray.length);
    let arr2 = [];
    for(let j=0;j<currArray.length;j++){
        // console.log(temp.length);
        // console.log("j:",j);
        let id = currArray[j][0];
        let name = currArray[j][1];
        let email = currArray[j][2];
        let date = currArray[j][3];
        let pan = currArray[j][4];
        console.log(typeof(id),typeof(name),typeof(email),typeof(date),typeof(pan));
        // console.log(pan,pan.length);
        let flag = true;
        if(id===""){
            flag = false;
            arr2.push("id is not valid")
        }
        if(name===""){
            flag = false;
            arr2.push("name is not valid")
        }
        //email validate
        if(!validateEmail(email)){
            flag = false;
            arr2.push("email is invalid")
        }
        if(!validatedate(date)){
            flag = false;
            arr2.push("date is not valid")
        }
        if(pan.length !== 10){
            flag = false;
            arr2.push("pan length must be 10")
        }
        if(flag){
            success++;
        }else{
            invalid++;
        }
    }
    currArray.push(arr2);
    finalData.push(currArray);
}
console.log("success:",success);
console.log("Invalid:",invalid);
console.log(finalData);
