import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const AdvancedSearchResults = ({apiKey}) => {
  const params = useParams();
  const [searchResult, setSearchResult] = useState([]);
  
  const getSearch = async (recipesToGet) => {
    const response = await fetch(`
      https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}${recipesToGet}`
    );
    const data = await response.json();
    setSearchResult(data.filterSearch)
    console.log(data.filterSearch);
  }

  useEffect(() => {
    getSearch(params.filterSearch)
  }, [params.search])

  return (
    <div>
      {searchResult}
    <div>AdvancedSearchResults</div>
    </div>
  )
}

export default AdvancedSearchResults