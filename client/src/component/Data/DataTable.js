import React, { useEffect, useState} from "react";
import axios from "axios";
import "./DataTable.css";

const DataTable = () => {
  const [data, setData] = useState(null);
  // const [check,setCheck]=useState(false);
  // let data=[];
  // const [data,setData]=useState([]);
  //  let data=[{}];
  //   const handler=()=>{
  //   }


//const [store,setStore] = useState({kjhjkh:"hfghh"})

const countryHandler=(e,country)=>{
  console.log(country);
  let countryId=document.getElementById(country.name.en);
  if(countryId.checked!=false)
  {
    country.state.forEach((state)=>{
      document.getElementById(state.name.en).checked=true;
      state.city.forEach(city=>{
        document.getElementById(city.name.en).checked=true;
      })
    })
  }else{
    country.state.forEach((state)=>{
      document.getElementById(state.name.en).checked=false;
      state.city.forEach(city=>{
        document.getElementById(city.name.en).checked=false;
      })
    })
  }
};
  const handler=(e,state ) =>{
    let stateId=document.getElementById(state.name.en);
    if(stateId.checked!=false){
      let cityCont=document.getElementById(state.name.en);
    state.city.forEach(city=>{
      document.getElementById(city.name.en).checked=true;
    })
    }else{
      let cityCont=document.getElementById(state.name.en);
    state.city.forEach(city=>{
      document.getElementById(city.name.en).checked=false;
    })
    }

    //for(let i=0;i<cityCont.length;i++){
//       cityCont[i].lastChild.forEach(item=>{
// ole.log(item.name);
      //})
  //  }
    //state.forEach(city=>{
    //   cityCont.forEach(item=>{
    //     if(item.value===city.name.en)
    //     {
    //       item.checked=true;
    //     }else{
    //       item.checked=false;
    //     }
    //   })
    //})
    // const List=document.getElementById("list");
    //console.log(List.value);
    //console.log(inpt);
    // data.forEach(item => {
    //   if(item.state===List.value || item.state.city===List.value){
    //     inpt.checked=true;
    //   }else{
    //     inpt.checked=false;
    //   }
      
    // });
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/area/")
      .then(
        (response) => {
        console.log(response.data);
        return response.data;
        }
        // console.log(response response.json();
        //const data=response[0].map(item=>item.data)
        //  console.log(response.data[0]);
        //  const country=response.data.map(item=>{
        //   return(
        //     <>
        //     <ul className="sub-dataTable">
        //       <li>{item.name.en}</li>
        //      </ul>
        //     </>
        //   )
        //  })
        //  const parent=document.getElementsByClassName("sub-dataTable");
        //  parent[0].innerHTML=country.join("");
      )
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // data.map(item=>{
  //   return(
  //     <>
  //     <ul className="sub-dataTable">
  //       <li>{item.name.en}</li>
  //     </ul>
  //     </>
  //   )
  // })

  return (
    <>
        <div classname='d-flex' >
        <ul className="mainContainer">
        {data ? (<>
          <ul className="country">
            <h1>listDetail</h1>
            {data.map((item)=>(
                <>
                  <li><input id={item.name.en} type="checkbox" onClick={(e)=>countryHandler(e,item)}/> {item.name.en}</li>
                  <ul className="state">
                    {item.state.map((state) =>(
                        <>
                          <li ><input onClick={ (e)=> handler(e,state)} name="inpt"  id={state.name.en} type="checkbox"/>{state.name.en}</li>
                          <ul className="city" >
                            {state.city.map((city) =>(<>
                              <li><input  id={city.name.en}  name="inpt" type="checkbox"/>{city.name.en}</li>
                            </>))}
                          </ul>
                        </>
                      )
                    )}
                  </ul>
                </>
              )
            )}
          </ul>
       </> ) : (
          <p>Loading...</p>
        )}

      </ul>
      <div className="sub-container">
      <p>{JSON.stringify(store)}</p>
      </div>
        </div>
    </>
  );
};

export default DataTable;
