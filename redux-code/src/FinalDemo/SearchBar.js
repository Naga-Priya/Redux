import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const expenses = useSelector((store)=>store.items);
    const [searchInput,setSearchInput] = useState('');
    const [searchOutput,setSearchOutput] = useState([]);
    const [activeSuggestionIndex,setActiveSuggestionIndex] = useState(-1);

    const dispatch = useDispatch();
    useEffect(()=>{
        console.log('Use effect called');
        if(searchInput==''){
            console.log("Empty");
            setSearchOutput([]);
            setActiveSuggestionIndex(-1);
            dispatch({
                type:'ADD_FILTER',
                payload:''
              })
        }
        else if(expenses.length == 0){
            console.log("List is empty");
            setSearchOutput([]);
        }
        else{
            
            let searchArr = [ ...expenses];
            console.log(searchArr,searchInput);
            setSearchOutput(searchArr.filter((expense) => expense.name.toLowerCase().includes(searchInput.toLowerCase())));
            console.log(searchOutput);
        }
            
    },[searchInput,activeSuggestionIndex]);

    const setListFocus = (e) =>{
        console.log("Set List Focus Called");
            // User pressed the enter key
            if (e.keyCode === 13) {
                console.log("Enter Key Pressed");
              //setInput(filteredSuggestions[activeSuggestionIndex]);
              if(activeSuggestionIndex!== -1){
                  setSearchInput(searchOutput[activeSuggestionIndex].name);

              }
            console.log("Selected: ",searchInput);
                dispatch({
                    type:'ADD_FILTER',
                    payload:searchInput
                })
                let elmt=document.getElementById("autocompletelist");
                elmt.classList.add("hidden");
              setActiveSuggestionIndex(-1);
              //setShowSuggestions(false);
            }
            // User pressed the up arrow
            else if (e.keyCode === 38) {
              if (activeSuggestionIndex === 0) {
                return;
              }
        
              setActiveSuggestionIndex(activeSuggestionIndex - 1);
            console.log("Up arrow pressed");
            }
            // User pressed the down arrow
            else if (e.keyCode === 40) {
                console.log("Down Arrow");
              if (activeSuggestionIndex === searchOutput.length-1) {
                console.log('if: ',activeSuggestionIndex);
                return;
              }
              
              setActiveSuggestionIndex(activeSuggestionIndex + 1);
              console.log('Out: ',activeSuggestionIndex+1);
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
    function changeSearchTxt(e){
        const element = document.getElementById("autocompletelist");
        if(element.classList.contains("hidden"))
        element.classList.remove("hidden");
        setSearchInput(e.target.value)
    }

    if (searchOutput.length >0) {
        return (
            <div className={styles.autocomplete}>
                <input type="search" 
                onKeyDown={setListFocus}
                onChange={changeSearchTxt} value={searchInput} 
                placeholder="Enter text to search"></input>
                <span className='col-1'> </span>
                <button type="search" className="btn btn-primary btn-sm" onClick={addFilter}>search</button>
                {/* <ul className="list-group">
                <li className="list-unstyled" */}
                
                <div id="autocompletelist" className={styles.autocompleteitems}>
                <ul>
                
                    {searchOutput.map((entry,index) => {
                        
                        if(index === activeSuggestionIndex)
                        return (
                            <div >
                            <li className={styles.autocompleteActive} onClick={searchText}
                            id = {entry.name}
                            key={entry.name}>
                                {entry.name}
                                </li>
                            </div>
                        )
                        else
                        return (
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