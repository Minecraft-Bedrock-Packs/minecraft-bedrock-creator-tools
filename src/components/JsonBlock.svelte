<script>
	import '../app.css';
	let props = $props();
</script>

<code>
	<textarea spellcheck="false" cols="35" readonly="false" rows="15" class={props.class} >
		{props.json}
	</textarea>
</code>

<!-- class="form-control shadow resize" -->