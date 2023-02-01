import MeasuresData from '../../data/measures'

export async function getServerSideProps({params}) {
    const {slug} = params
    const measure = MeasuresData.find(m => m.slug === slug)
    return {
        props: {
            measure,
        }
    }
}

function Meausre({measure}) {
    console.log(measure)
    return (
        <main>
            <li >
                <i>icon</i>
                <h3>{measure.title}</h3>
            </li>

        </main>
    )
}

export default Meausre