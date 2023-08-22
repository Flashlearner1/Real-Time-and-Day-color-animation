
        const Today = new Date();
        const Day = Today.getDay();
        const DayList = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday'];

        let hour = Today.getHours();
        const minute = Today.getMinutes();
        const second = Today.getSeconds();

        let prepand = ( hour >= 12 ) ? 'PM' : 'AM'
        hour = ( hour >= 12 ) ? hour - 12 : hour

        if ( hour === 0 && prepand === 'PM'){
            if (minute === 0 && second == 0){
                hour = 12;
                prepand = noon;
            }
            else{
                hour = 12;
                prepand = PM;
            }
        }

        if ( hour === 0 && prepand === 'AM'){
            if (minute === 0 && second == 0){
                hour = 12;
                prepand = midnight;
            }
            else{
                hour = 12;
                prepand = AM;
            }
        };


        document.getElementById('result').innerHTML = `Today is: ${DayList[Day]}  ${hour}:${minute}:${second} ${prepand}`;