import NavBar from "../../components/NavBar"
import PostCard from "../../components/PostCard"
import StyleCss from "./Home.module.css"

const Home = () => {

	return(
		<>
			<NavBar/>
			<section className={StyleCss.container}>
				<div className={StyleCss.column1}>pueba 1</div>
				<div className={StyleCss.column2}>
					<PostCard/>
				</div>
				<div className={StyleCss.column3}>prueba 2</div>
			</section>
		</>
	)
}

export default Home