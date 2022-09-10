import { useEffect, useState } from "react"
import LoadingIcon from '~icons/line-md/loading-alt-loop'

const Leaderboard = () => {
    const [loading, setLoading] = useState(true)
    const [recordElements, setrecordElements] = useState([])
    useEffect(() => {
        async function getRecords() {
            await fetch('http://localhost:5050/records')
                .then(res => (res.json()))
                .then(json => {
                    const records = json.records
                    const recordElements = records.map(
                    (record: any, index: number) => (<tr key={index}>
                        <th>{record.name}</th>
                        <td>{record.score}</td>
                    </tr>
                    ))
                    setrecordElements(recordElements)
                })
            setLoading(false)
        }
        getRecords()

    }, [])
    const loadingIcon = <div><LoadingIcon /></div>
    const table =
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {recordElements}
                </tbody>
            </table>
        </div>
    return (
        <div>
            {loading ? loadingIcon : table}
        </div>
    )
}

export default Leaderboard
