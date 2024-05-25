const Menu = () => {
  return (
    <div className="flex gap-4 items-center bg-black p-2">
      <h1 className="text-4xl text-white">Menu</h1>
      <div className="flex gap-4">
        <a href="/" className="bg-blue-500 text-white p-4 rounded-md">
          Vocab
        </a>
        <a href="/match" className="bg-blue-500 text-white p-4 rounded-md">
          Match
        </a>
      </div>
    </div>
  );
};

export default Menu;