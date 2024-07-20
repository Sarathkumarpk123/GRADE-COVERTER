function convertTomark() {
const inputgrades=document.getElementById('userinput').value.toUpperCase();
const convertval=document.getElementById('convertval');
let mark;
    if(inputgrades === 'A+')
    {
        mark = 90
    }
    else if(inputgrades === 'A')
    {
        mark = 80
    }
    else if(inputgrades === 'B+')
        {
            mark = 70
        }
        else if(inputgrades === 'B')
            {
                mark = 60
            }
            else if(inputgrades === 'C+')
                {
                    mark = 50
                }
                convertval.value = `The percentage is ${mark}`;

}

