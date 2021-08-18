function updateProductNumber (product, price , isIncreasing){
    const ProductNumberInput = document.getElementById(product+'-number')

   let ProductNumber =   ProductNumberInput.value
if(isIncreasing){
    ProductNumber = parseInt(ProductNumber)+1
}
else if(ProductNumber>0){
    ProductNumber= parseInt(ProductNumber)-1
}
ProductNumberInput.value= ProductNumber
const ProductNumberTotal = document.getElementById( product+  '-total')
ProductNumberTotal.innerText=  ProductNumberInput.value* price

///call total funtion
 calculationTotal();
}



    



///phone increase decrease event

document.getElementById('phone-plus').addEventListener('click',function(){

    updateProductNumber('phone', 1219 ,true);

})

document.getElementById('phone-minus').addEventListener('click',function(){

    updateProductNumber('phone', 1219 ,false);
   
    })

    ///handle case increse decrease event

    document.getElementById('case-plus').addEventListener('click',function(){

        updateProductNumber('case',59 ,true);
        })
        
        document.getElementById('case-minus').addEventListener('click',function(){
        
            
            updateProductNumber('case',59 ,false);
            })
//update calculation 

function getInputValue (product) {

    const productInput  =   document.getElementById(product +'-number').value;
    const productNumber = parseInt(productInput);
    return productNumber;
}

function calculationTotal(){
    const phoneTotal= getInputValue('phone') * 1219 ;
    const caseTotal= getInputValue('case') * 59 ;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
  
  
    }

            
 
  