
export const Searchbar = ({ handleSearchChange }) => {
  return (
    <div clasName='searchbar-container'>
    <input 
      className="searchbar"
      type='text'
      placeholder='Buscar...'
      onChange={handleSearchChange}
    />
    </div>
  )
}
