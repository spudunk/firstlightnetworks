import { browser } from '$app/environment';

let ls = $state({selectedKit: 999});

if (browser) {
	const saved = localStorage.getItem('selectedKit');
	if (saved) ls.selectedKit = JSON.parse(saved);

	$effect(() => {
		if (ls.selectedKit) {
			localStorage.setItem('selectedKit', JSON.stringify(ls.selectedKit));
		} else {
			localStorage.removeItem('selectedKit');
		}
	});
}

export function selectKit(kit: number) {
	ls.selectedKit = kit;
}

export function unselectKit() {
	ls.selectedKit = 999;
}


  export { ls };
