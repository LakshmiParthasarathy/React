
import React, {useState,useEffect} from 'react';

function Submit(props) {
    
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 
    const [inputField , setInputField] = useState([])
     let productId;
     let productName;
     let productDesc;
     let prodPrice;  
    let filter=" "
 

    function inputsHandler (e) {
        
        if(e.target.id=="productId")
        {
            productId=e.target.value
        }
        if(e.target.id=="productName")
        {
            productName=e.target.value
        }
        if(e.target.id=="productDesc")
        {
            productDesc=e.target.value
        }
        if(e.target.id=="productPrice")
        {
            prodPrice=e.target.value
        }

    }

    const filteredPersons = inputField.filter(
      product => {
        return (
          product.productName
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
         product.productDesc
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );

   /* function searchTxt(e)
    {
        setInputField({filter:e.target.value})
    }*/
    function searchList() {
      if (searchShow) {
        return (
          
            <inputField filteredPersons={filteredPersons} />
          
        );
      }
    }
      
    function submitButton()
    {
       //setInputField(inputField.push({pId:productId,pName:productName,pDesc:productDesc,pPrice:prodPrice}))
             
        console.log(inputField)
        setInputField([...inputField, {pId:productId,pName:productName,pDesc:productDesc,pPrice:prodPrice}])
    
    }


    useEffect(()=>
    {
       document.getElementById("productId").value=''
       document.getElementById("productName").value=''
       document.getElementById("productDesc").value=''
       document.getElementById("productPrice").value=''
    })
 
    
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
   
     
   /*let Datasearch=inputField.filter(item=>{
    return Object.keys(item).some(key=>
        item[key].toLowerCase().includes(filter.toLowerCase()))
   }
    );*/

    return (
        <div>
            Search:<input type="text" placeholder='Search for product'/>
            <hr/>
            ProductID: <input 
            type="text" 
            id="productId" 
            onChange={inputsHandler} 
            />

            <br/>

           ProductName: <input 
            type="text" 
            id="productName" 
            onChange={inputsHandler} 
            />

            <br/>

           Description: <input 
            type="text" 
            id="productDesc" 
            onChange={inputsHandler} 
            />

            <br/>

          Price:  <input 
            type="text" 
            id="productPrice" 
            onChange={inputsHandler} 
             /><br/>
    
            <button onClick={submitButton}>Submit Now</button>

            <div>  {searchList()} </div>

        </div>
    )
}

export default Submit