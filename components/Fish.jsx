
import { useEffect, useState } from 'react';
import supabase from '../config/supabaseclient';

const Fish = () => {

    const [fetchError, setFetchError] = useState(null)
    const [smoothies, setSmoothies] = useState(null)

    useEffect(() => {
        const fetchSmoothies = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select()
            if (error) {
                setFetchError('Could not fetch the smoothies')
                setSmoothies(null)
                console.log(error)
            }
            if (data) {
                setSmoothies(data)
                console.log(data)
                console.log(error)
            }
        }
        fetchSmoothies()

    }, [])
    //console.log(supabase)
    return (
        <div>23213</div>
    )
}
export default Fish