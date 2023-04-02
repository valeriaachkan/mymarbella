
// function to show submitted multiple selects
export default function customForm(){
    // function to close details on click elsewhere
    const form = document.querySelector('form');
    const detailsElementsArray = document.querySelectorAll('details');
    const summary = document.querySelectorAll('.multiple-select summary');


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        buildFormDataAndSend();

        // console.log(JSON.stringify(formData.getAll('select')));

        // result.innerText = JSON.stringify(formData.getAll('select'), null, 2);
    });


    
    if (detailsElementsArray.length > 0) {
        detailsElementsArray.forEach((targetDetail) => {
            
            document.addEventListener('click', function (e) {
                // listener for open or close
                if (targetDetail && !targetDetail.contains(e.target)){
                    targetDetail.removeAttribute('open')
                }
            });
             // update <summary>
            targetDetail.addEventListener('click', (e) => {
                updateSummary(e.currentTarget)
            })

        });
    }

    function buildFormDataAndSend(){
        const scope = this;

        function makeRequest(){
            const formData = new FormData(form);
            const requestOptions = {
                method: 'GET',
                p2: '03ca0745e539d0304361b3187c3b36ae598c38a1',
                p1: '1014905',
                mode: 'no-cors'
            }

            fetch('https://webapi.resales-online.com/V6/', requestOptions)
            .then((response) => response.json())
            .then((result, error)=>{
                if (result.statusCode === 400 || error){
                    console.log(error);
                    // notification()
                } else {
                    // success()
                }
            })

        }

        makeRequest();
    }

    function updateSummary(targetElement){
        const options = targetElement.querySelectorAll('input[type=checkbox]');
       
        const selectedValues = Array.from(options)
             .filter((option)=> option.checked)
             .map((option) => option.nextElementSibling);
        const selectedValuesText = Array.from(options)
             .filter((option)=> option.checked)
             .map((option) => option.nextElementSibling.textContent)
             .join(', ');

            console.log('selectedValues',selectedValues)

        if (selectedValues.length === 0) {
            console.log(0)
             targetElement.querySelector('summary').textContent = 'Select Locations';
        } else if (selectedValues.length <= 2){
            console.log(1)
            targetElement.querySelector('summary').textContent = selectedValuesText;
        } else {
            console.log(2)
            targetElement.querySelector('summary').textContent = `Selected ${selectedValues.length} locations`
        }
    }
}


   
