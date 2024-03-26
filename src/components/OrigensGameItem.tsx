import GameItem from "./GameItem";
import origensImageUrl from '../images/origens-image.png';

const OrigensGameItem = () => {
    const origensUrl: string = "https://wendell-leao.itch.io/origens";
    const origensVideoUrl: string = "https://dai.ly/k6Dahmu0Mm23mZAk9Fk";
    
    return (
        <GameItem id="origens" title="Origens" synopses="origensSynopsis" description="origensDescription" store="itch"
                  side="right" url={origensUrl} videoUrl={origensVideoUrl} imageUrl={origensImageUrl} />
    )
}

export default OrigensGameItem;