import React, { useEffect,useState } from 'react';
import {useSelector} from 'react-redux';

function SearchBar(props) {
    const expenses = useSelector((store)=>store.items);
    const [searchInput,setSearchInput] = useState('');
    const [searchOutput,setSearchOutput] = useState([]);

    useEffect(()=>{
        if(searchInput==''){
            setSearchOutput([]);
        }
        else if(expenses.length == 0){
            console.log("List is empty");
            setSearchOutput([]);
        }
        else{
            
            let searchArr = [ ...expenses];
            console.log(searchArr,searchInput);
            setSearchOutput(searchArr.filter((expense) => expense.name.toLowerCase().startsWith(searchInput.toLowerCase())));
            console.log(searchOutput);
        }
            
    },[searchInput]);

    const setListFocus = () =>{
        console.log("Set List Focus Called");
        if(searchOutput==''|| searchOutput.length == 0){
            setSearchOutput([]);
        }
        else {
            document.getElementById(searchOutput[0].name).autofocus = true;
        }
    }

    return (
        <div>
            <input type="search" 
            onKeyDown={(e)=>e.keyCode==40?setListFocus():console.log("Do Nothing")}
            onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} 
            placeholder="Enter text to search"></input>
            <ul className="list-group">
                {searchOutput.map(entry => {return (
                    <li className="list-unstyled" 
                    id = {entry.name}
                    key={entry.name}>{entry.name}</li>
                )})}
            </ul>
        </div>
    );
}

export default SearchBar;