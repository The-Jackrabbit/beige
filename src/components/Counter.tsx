
import { h, Fragment } from 'preact';

export default function Counter({  count }) {
	const add = () => count.value++;

	return (
		<>
			<div class="counter">
				<button onClick={add}>+</button>
				<pre>{count}</pre>
			</div>
		</>
	);
}