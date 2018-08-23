var MovieList = props => (
	<table>
		<tbody>
			{props.movies.map(movie => (
				<MovieListEntry movie={movie} />
			))}
		</tbody>
	</table>
);
