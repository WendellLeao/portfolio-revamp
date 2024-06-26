import GameItem from "./GameItem";
import imageUrl from '../../images/rogue-image.png';
import gifUrl from '../../gifs/rogue.gif';

const RogueGameItem = () => {
    const rogueUrl: string = "https://store.steampowered.com/app/1063590/Rogue_Masters";
    const rogueVideoUrl: string = "videos/rogue.mp4";
    
    return (
        <GameItem id="rogue" title="Rogue Masters" synopses="rogueSynopsis" description="rogueDescription" store="steam"
                  side="left" url={rogueUrl} videoUrl={rogueVideoUrl} imageUrl={imageUrl} gifUrl={gifUrl} />
    )
}

export default RogueGameItem;