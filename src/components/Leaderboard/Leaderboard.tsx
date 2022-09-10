import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
                        (record: any, index: number) => (
                            <tr className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100" key={index}>
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
        <div className="" >
            <table className='w-full whitespace-nowrap'>
                <thead>
                    <tr className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100">
                        <th className="font-normal text-center">Name</th>
                        <th className="font-normal text-left">Score</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {recordElements}
                </tbody>
            </table>
        </div>
    return (
        <div className="mt-10">
            <div className="pl-10"><Link className="shadow bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-3 text-sm" to="/">Return To Menu</Link></div>
            <div className="flex flex-col justify-center">
                <h1 className="text-center">Leaderboard</h1>
                {loading ? loadingIcon : table}
            </div>
        </div>
    )
}

export default Leaderboard
