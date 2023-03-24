<form method="GET">
	<div class="leftAlign textInputWrapper">
		<div>
			<label for="name"> Name: </label>
			<input type="text" id="name" name="name" />
		</div>
		<div>
			<label for="email"> Email: </label>
			<input type="email" id="email" name="email" />
		</div>
		<div>
			<label for="cell"> Cell: </label>
			<input type="tel" id="cell" name="cell" />
		</div>
	</div>
	<div class="flexWrapper radioWrapper">
		<span>Prefer:</span>
		<span>
			<input type="radio" id="prefemail" name="prefcontact" value="Email" />
			<label for="prefemail">Email</label>
		</span>
		<span>
			<input type="radio" id="preftext" name="prefcontact" value="Text" />
			<label for="preftext">Text</label>
		</span>
	</div>
	<div>
		<p>Provide a brief message about the class you'd like to book:</p>
		<textarea id="message" name="message" />
	</div>

	<div class="checkWrapper">
		<p>Select as many as apply:</p>
		<div class="gridWrapper">
			<div>
				<input type="checkbox" id="wellness" name="wellness" value="true" />
				<label for="wellness">Wellness Retreat</label>
			</div>
			<div>
				<input type="checkbox" id="kids" name="kids" value="true" />
				<label for="kids">Kids Yoga</label>
			</div>
			<div>
				<input type="checkbox" id="moms" name="moms" value="true" />
				<label for="moms">Moms Yoga</label>
			</div>
			<div>
				<input type="checkbox" id="families" name="families" value="true" />
				<label for="families">Family(ies) Yoga</label>
			</div>
			<div>
				<input type="checkbox" id="caseworkers" name="caseworkers" value="true" />
				<label for="caseworkers">Caseworker Yoga</label>
			</div>
			<div>
				<input type="checkbox" id="athletic" name="athletic" value="true" />
				<label for="athletic">Athletic Yoga</label>
			</div>
		</div>
		<input type="checkbox" id="reoccuring" name="reoccuring" value="true" />
		<label for="reoccuring">Reoccuring Schedule?</label><br />
	</div>
	<button type="submit">Submit</button>
</form>

<style>
	form {
		max-width: 45rem;
		margin: 2rem auto;
		padding: 1rem 2rem;
		background: var(--primary-light);
		border: 0.2rem solid var(--primary-color);
		border-radius: 1rem;
	}

	label,
	span {
		font-size: 2rem;
	}

	div {
		margin: 1rem 0;
	}
	p {
		text-align: left;
	}

	textarea {
		width: 100%;
		height: 10rem;
		margin-top: 1rem;
	}

	.leftAlign {
		text-align: left;
		margin-top: 0;
	}
	.textInputWrapper input {
		height: 2.5rem;
		width: 20rem;
		margin-left: 1rem;
	}
	.gridWrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: start;
		column-gap: 1rem;
	}
	.flexWrapper {
		display: flex;
		gap: 2rem;
	}
	.radioWrapper label {
		margin-left: 0.5rem;
	}
	.checkWrapper label {
		margin-left: 1rem;
	}
</style>
