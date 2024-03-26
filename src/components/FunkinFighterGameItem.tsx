import GameItem from "./GameItem";
import funkinFighterImageUrl from '../images/funkin-fighter-image.png';

const FunkinFighterGameItem = () => {
    const funkinFighterUrl: string = "";
    const funkinFighterVideoUrl: string = "videos/funkin-fighter.mp4";
    
    return (
        <GameItem id="funkinFighter" title="Funkin' Fighter" synopses="funkinFighterSynopsis" description="funkinFighterDescription" store="itch"
                  side="right" url={funkinFighterUrl} videoUrl={funkinFighterVideoUrl} imageUrl={funkinFighterImageUrl} />
    )
}

export default FunkinFighterGameItem;