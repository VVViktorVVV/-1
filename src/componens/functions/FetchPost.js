


// const fedorenko = {
//     id: 2526913182,
//     name: "Федоренко Станіслав Євгенович",
//     startPeriod1: "01.11.2022",
//     finishPeriod1: "30.11.2022",
//     startPeriod2: "00.00.1900",
//     finishPeriod2: "00.00.1900",
//     periodNumbers: []
// };

const fetchPostUsers = async (e) => {
  
      const response = await fetch("http://localhost:3003/arrayOrder1", {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(e),
          

      });
    console.log(JSON.stringify(e));
    const result = await response.json();
    console.log(result)
 

}

export default fetchPostUsers;
