import { ReactComponent as LoaderSVG } from '../assets/loader.svg';
const Loader = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-white text-center z-20">
            <div className="mt-96">
                <LoaderSVG />
                <span>Processing...</span>
            </div>
        </div>
    )
}

export default Loader;