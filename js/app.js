// for Area Calculation serial number
let serialNumber = 0;

//1st card- For triangle and display the result in Area Calculation
document.getElementById('triangle-btn').addEventListener('click', function(){
    serialNumber += 1;   
    const geometryName = document.getElementById('triangle-title').innerText;
    const firstInput = document.getElementById('first-triangle-input').value;
    const secondInput = document.getElementById('second-triangle-input').value;
    const total = parseInt(firstInput) * parseInt(secondInput) * .5 ;
    
    
    

// For JavaScript Validation
    if(firstInput,secondInput === "" || firstInput<= 0 || secondInput<= 0 ||
     isNaN (firstInput) || isNaN (secondInput) ){
        return alert('please enter any valid number')
    }

    displayAllData(geometryName,total);
    disableButton('triangle-btn')
    
    
})

//2nd card- For rectangle and display the result in Area Calculation
document.getElementById('rectangle-btn').addEventListener('click', function(){
    serialNumber += 1;
    const geometryName = document.getElementById('ractangle-title').innerText;
    const ractangleFirstInput = document.getElementById ('ractangle-first-input').value;
    const ractangleSecondInput = document.getElementById ('ractangle-second-input').value;
    const total = parseInt(ractangleFirstInput) * parseInt(ractangleSecondInput);
      
// For JavaScript Validation
    if(ractangleFirstInput,ractangleSecondInput === "" || ractangleFirstInput<= 0 || ractangleSecondInput<= 0 ||
     isNaN(ractangleFirstInput) || isNaN(ractangleSecondInput)){
        return alert('please enter any valid number')
    }

    displayAllData(geometryName,total); 
    disableButton('rectangle-btn')  
})

//3rd card- For parallelogram and display the result in Area Calculation
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    serialNumber += 1;
    const geometryName = document.getElementById('parallelogram-title').innerText;
    const parallelogramFirstInput = document.getElementById ('parallelogram-first-input').value;
    const parallelogramSecondInput = document.getElementById ('parallelogram-second-input').value;
    const total = parseInt(parallelogramFirstInput) * parseInt(parallelogramSecondInput);

// For JavaScript Validation
    if(parallelogramFirstInput,parallelogramSecondInput === "" || parallelogramFirstInput<= 0 || parallelogramSecondInput<= 0 ||
     isNaN(parallelogramFirstInput) || isNaN(parallelogramSecondInput)){
        return alert('please enter any valid number')
    }

    displayAllData(geometryName,total);
    disableButton('parallelogram-btn')   
})


//4th card- For rhombus and display the result in Area Calculation

document.getElementById('rhombus-btn').addEventListener('click', function(){
    serialNumber += 1;
    const geometryName = document.getElementById('rhombus-title').innerText;
    const rhombusFirstInput = document.getElementById ('rhombus-first-input').value;
    const rhombusSecondInput = document.getElementById ('rhombus-second-input').value;
    const total = parseInt(rhombusFirstInput) * parseInt(rhombusSecondInput) * 0.5;

// For JavaScript Validation
    if(rhombusFirstInput,rhombusSecondInput === "" || rhombusFirstInput<= 0 || rhombusSecondInput<= 0 ||
     isNaN(rhombusFirstInput) || isNaN(rhombusSecondInput)){
        return alert('please enter any valid number')
    }

    displayAllData(geometryName,total);
    disableButton('rhombus-btn')   
})

// 5th card- For pentagon and display the result in Area Calculation
document.getElementById('pentagon-btn').addEventListener('click', function(){
    serialNumber += 1;
    const geometryName = document.getElementById('pentagon-title').innerText;
    const pentagonFirstInput = document.getElementById ('pentagon-first-input').value;
    const pentagonSecondInput = document.getElementById ('pentagon-second-input').value;
    const total = parseInt(pentagonFirstInput) * parseInt(pentagonSecondInput) * 0.5;

// For JavaScript Validation
    if(pentagonFirstInput,pentagonSecondInput === "" || pentagonFirstInput<= 0 || pentagonSecondInput<= 0 ||
     isNaN(pentagonFirstInput) || isNaN(pentagonSecondInput)){
        return alert('please enter any valid number')
    }

    displayAllData(geometryName,total);
    disableButton('pentagon-btn')   
})



//6th card- For ellipse and display the result in Area Calculation

document.getElementById('ellipse-btn').addEventListener('click', function(){
    serialNumber += 1;
    const geometryName = document.getElementById('ellipse-title').innerText;
    const ellipseFirstInput = document.getElementById ('ellipse-first-input').value;
    const ellipseSecondInput = document.getElementById ('ellipse-second-input').value;
    const total = parseInt(ellipseFirstInput) * parseInt(ellipseSecondInput) * 3.14;
    

// For JavaScript Validation
   if(ellipseFirstInput,ellipseSecondInput === "" || ellipseFirstInput<= 0 || ellipseSecondInput<= 0 ||
     isNaN(ellipseFirstInput) || isNaN(ellipseSecondInput)){
        return alert('please enter any valid number')
    }

    displayAllData(geometryName,total); 
    disableButton('ellipse-btn')
     
})

// common function to display all data
function displayAllData(geometryName,total){
    const areaContainer = document.getElementById('area-container');
// display table data 
    const tr = document.createElement('tr');
    tr.innerHTML =`
        <td>${serialNumber}</td>
        <td>${geometryName}</td>
        <td>${total.toFixed(2)}cm<sup>2</sup></td>
        <td><button class="p-3 pb-8 h-8 bg-[#1090D8] text-white font-semibold">Covert to m<sup>2</sup></button></td> 
        <td><button ><i class="fa-solid text-red-600 font-bold text-4xl fa-xmark" ></i></button></td> 
     `
    areaContainer.appendChild(tr);
}

// click the button then disable it
function disableButton (disable){
    document.getElementById(disable).setAttribute('disabled', true);
    
}

// for randomly card-box color change
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);  
  });
  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = '';
  });
});
