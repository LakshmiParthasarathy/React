import React from 'react';

function Practice(props) {
    const product={
        prodId: '',
        prodName:'',
        prodDesc:'',
        prodPrice:''
    }
    return (
        <div>
           ID: <input type="text" value={this.product.prodId}/>
           Name:<input type="text" value={this.product.prodName}/>
           Description:<input type="text" value={this.product.prodDesc}/>
           Price:<input type="text" value={this.product.prodPrice}/>
           Save:<input type="button" name="Add" />
            
        </div>
    );
}

export default Practice;