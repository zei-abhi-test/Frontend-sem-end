import useWindowWidth from "./hooks/useWindowWidth";

export default function Window() {
    const width = useWindowWidth() ;

    return (
        <div>
            <h2>
                Window width: {width}
            </h2>
        </div>
    )
}