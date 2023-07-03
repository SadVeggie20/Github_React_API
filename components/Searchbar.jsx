
export const Searchbar = ({ handleSearchChange }) => {
  return (
    <input 
      className="searchbar"
      type='text'
      placeholder='Buscar...'
      onChange={handleSearchChange}
    />
  )
}
