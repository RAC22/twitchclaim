let searchForClaimButton = setInterval(pushClaim, 750)

function pushClaim() {
	const claimButton = document.querySelector('[aria-label="Claim Bonus"]')
	if (claimButton) {
		console.log(`Claimed bonus!`)
		claimButton.click()
	}
}
