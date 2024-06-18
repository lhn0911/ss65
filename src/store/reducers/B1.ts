const user:any = [
    {
      id: 1,
      name: "Nguyenvannam",
      gender: "nam",
      dateOfBirth: "20/03/2023",
      address: "Thanh xuân , hà nội"
    }
  ];
  
  const ReducerUser = (state = user, action: any) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.user];
      case "DELETE":
        return state;
      default:
        return state;
    }
  };
  
  export default ReducerUser;
  