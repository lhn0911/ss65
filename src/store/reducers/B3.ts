const product:any = [
    {
      id: 1,
      productName: "Cam sành",
      price: 20000,
      quantity: 10,
      
    },{
        id: 2,
        productName: "Bưởi ba roi",
        price: 50000,
        quantity: 15,
        
      },{
    }
  ];
  
  const Reducerproduct = (state = product, action: any) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.product];
      case "DELETE":
        return state;
      default:
        return state;
    }
  };
  
  export default Reducerproduct;
  