import { useEffect, useState } from "react"

const useHome = () => {
    const [homes, setHomes] = useState([]);
    useEffect(() => {
        fetch('./tools.json')
        .then(res => res.json())
        .then(data => setHomes(data))
    }, [])
    return [homes];
}
export default useHome;