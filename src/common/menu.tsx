export function Menu() {
  return (
    <div className='menu-bar'>
      <div className='menu'>File</div>
      <div className='menu'>Edit</div>
      <div className='menu'>View</div>
      <div className='menu'>Search</div>
      <div className='menu'>Terminal</div>
      <div
        className='menu'
        onClick={() => {
          alert(`Type user --help for more information`);
        }}>
        Help
      </div>
    </div>
  );
}
