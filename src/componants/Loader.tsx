import {Html} from '@react-three/drei'

export default function Loader() {
    return (
        <Html center>
            <div className = "flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-blue-500 border-dashed rounded-full animate-spin border-t-blue-500"></div>
            </div>
        </Html>
    )
}