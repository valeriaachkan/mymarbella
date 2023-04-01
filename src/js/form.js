
// function to show submitted multiple selects
export default function customForm(){
    // function to close details on click elsewhere
    const detailsElementsArray = document.querySelectorAll('details');
    const form = document.querySelector('form');


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        buildFormDataAndSend();

        console.log(JSON.stringify(formData.getAll('select')));

        // result.innerText = JSON.stringify(formData.getAll('select'), null, 2);
    });
    
    if (detailsElementsArray.length > 0) {
        detailsElementsArray.forEach((targetDetail) => {
            document.addEventListener('click', function (e) {
                if (targetDetail && !targetDetail.contains(e.target)){
                    targetDetail.removeAttribute('open')
                }
            });
        });
    }

    function buildFormDataAndSend(){
        const scope = this;

        function makeRequest(){
            const formData = new FormData(form);
            const requestOptions = {
                method: 'GET',
                body: formData,
                p2: '03ca0745e539d0304361b3187c3b36ae598c38a1',
                p1: '1014905'
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
}


   
