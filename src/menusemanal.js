

const MenuSemanal = () => {

    
    
            const inputs = document.querySelectorAll('input')

            const addToStorage = (text, id) => {
                localStorage.setItem(text, id)

            }

            const getFromStore = () => {
                inputs.forEach( input => {
                    const item = localStorage.getItem(input.id)

                    if (item){
                        input.value = item 
                    }
                })
            }

            inputs.forEach(element => element.addEventListener('change', (e) => {
                addToStorage(element.id, e.target.value)
            }))
            window.addEventListener('load', getFromStore())

    
   
    
    return (
      
        <div class="meal-container">
        <h2>Menú Semanal</h2>
        <div class="row">
        
        <div class="column"><label for="monday-lunch">Monday Lunch</label><input type="text" id="monday-lunch" /></div>
        <div class="column"><label for="tuesday-lunch">Tuesday Lunch</label><input type="text" id="tuesday-lunch" /></div>
        <div class="column"><label for="wednesday-lunch">Wednesday Lunch</label><input type="text" id="wednesday-lunch" /></div>
        <div class="column"><label for="thursday-lunch">Thursday Lunch</label><input type="text" id="thursday-lunch" /></div>
        <div class="column"><label for="friday-lunch">Friday Lunch</label><input type="text" id="friday-lunch" /></div>
        <div class="column"><label for="saturday-lunch">Saturday Lunch</label><input type="text" id="saturday-lunch" /></div>
        <div class="column"><label for="sunday-lunch">Sunday Lunch</label><input type="text" id="sunday-lunch" /></div>
      </div>
      <div class="row">
        <div class="column"><label for="monday-dinner">Monday Dinner</label><input type="text" id="monday-dinner" /></div>
        <div class="column"><label for="tuesday-dinner">Tuesday Dinner</label><input type="text" id="tuesday-dinner" /></div>
        <div class="column"><label for="wednesday-dinner">Wednesday Dinner</label><input type="text" id="wednesday-dinner" /></div>
        <div class="column"><label for="thursday-dinner">Thursday Dinner</label><input type="text" id="thursday-dinner" /></div>
        <div class="column"><label for="friday-dinner">Friday Dinner</label><input type="text" id="friday-dinner" /></div>
        <div class="column"><label for="saturday-dinner">Saturday Dinner</label><input type="text" id="saturday-dinner" /></div>
        <div class="column"><label for="sunday-dinner">Sunday Dinner</label><input type="text" id="sunday-dinner" /></div>
      </div>
      
    </div>
      
    );
  };
  
  export default MenuSemanal;