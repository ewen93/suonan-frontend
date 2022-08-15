import Header from '../header';
import PostSnapshot from '../postSnapshot'

export default function Homepage (){
  const postSnapshots = ['1', '2', '3', '4', '5'].map(
    num => (<PostSnapshot key={num} post={num}/>)
  )
	return (
		<div styles={{textAlign: 'center'}}>
			<Header/>
      {postSnapshots}
		</div>
	)
}