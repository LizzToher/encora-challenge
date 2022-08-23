import { useNavigate } from "react-router-dom";

export const SoftSkills = () => {
	const navigate = useNavigate();

	const handleOnClick = () => {
			navigate('/education');
			 }

    return (
        <section>
				<h3>Step 3</h3>
        <h1>Soft Skills</h1>
				<h3>Choose 5 of the most important skills to show your talents!</h3>
				<button onClick={handleOnClick}>BACK</button>
				<button>NEXT</button>
		
        </section>
    )
}