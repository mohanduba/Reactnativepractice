import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center bg-gray-100">
      <header className="text-center">
        <h1 className="text-1xl font-semibold text-blue-600 mb-4">
          Hello Tailwind + React! 👋
        </h1>

        <p className="text-gray-700 text-lg">
          Edit <code className="font-semibold">src/App.js</code> and save to reload.
          <h1 className="text-4xl font-bold text-red-500">Tailwind Works!</h1>
        </p>

        <a
          className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
