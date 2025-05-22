
function Header() {
  return (
    <header className="flex flex-col h-80 relative">
      <div className="flex-1 bg-center bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=600')]"></div>
      <div className='absolute flex-1 bg-blue-500/50 top-0 left-0 w-full h-full'></div>
      <div className='bg-black/50 absolute z-10'></div>
    </header>
  )
}

export default Header