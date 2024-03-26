//If else

let hour = 12;

if(hour < 12)
    console.log('Good Morning');
else if(hour >= 12 && hour <=15)
    console.log('Good Afternoon');
else
    console.log('Good Evening');

    

//Switch case
let role = 'Person';

switch(role){
    case 'guest':
        console.log('Guest Detected');
        break;

    case 'Moderator':
        console.log('Modertor Detected')
        break;

    default:
        console.log('Unknown User');
        break;
}






    
}