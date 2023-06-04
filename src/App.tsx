import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

/**
 * The App main component
 * @return {JSX.Element} The app main component
 */
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='w-full p-8 flex flex-col items-center gap-8'>
			<div className='flex flex-row gap-4'>
				<a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel='noreferrer'>
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className='text-2xl'>Vite + React</h1>
			<div className='flex flex-col gap-2 items-center gap-2'>
				<button className='py-2 px-6 bg-purple-900 text-white rounded-md' onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
