import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const expenses = useSelector((store)=>store.items);
    const [searchInput,setSearchInput] = useState('');
    const [searchOutput,setSearchOutput] = useState([]);

    const dispatch = useDispatch();
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
    const addFilter = () => {
        dispatch({
            type:'ADD_FILTER',
            payload:searchInput
          })
          setSearchOutput([]);
    }

    const searchText = (e) =>{
        console.log("Clicked: ",e.target.id);
        setSearchInput(e.target.id);
        dispatch({
            type:'ADD_FILTER',
            payload:searchInput
          })
        let elmt=document.getElementById("autocompletelist");
        elmt.classList.add("hidden");
        
    }
    if (searchOutput.length >0) {
        return (
            <div className={styles.autocomplete}>
                <input type="search" 
                onKeyDown={(e)=>e.keyCode==40?setListFocus():console.log("Do Nothing")}
                onChange={(e)=>{document.getElementById("autocompletelist").classList.remove("hidden");
                            setSearchInput(e.target.value)}} value={searchInput} 
                placeholder="Enter text to search"></input>
                <span className='col-1'> </span>
                <button type="search" className="btn btn-primary btn-sm" onClick={addFilter}>search</button>
                {/* <ul className="list-group">
                <li className="list-unstyled" */}
                
                <div id="autocompletelist" className={styles.autocompleteitems}>
                <ul>
                
                    {searchOutput.map(entry => {return (
                        <div >
                        <li className="list-unstyled" onClick={searchText}
                        id = {entry.name}
                        key={entry.name}>
                            {entry.name}
                            </li>
                        </div>
                    )})}
                    
                </ul>
                </div>

            </div>
        );
    }
    else{
        return (
            <div className={styles.autocomplete}>
                <input type="search" 
                onKeyDown={(e)=>e.keyCode==40?setListFocus():console.log("Do Nothing")}
                onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} 
                placeholder="Enter text to search"></input>
                <span className='col-1'> </span>
                <button type="search" className="btn btn-primary" onClick={addFilter}>search</button>
                {/* <ul className="list-group">
                <li className="list-unstyled" */}
            </div>
        );
    }
}

export default SearchBar;