import GameItem from "./GameItem";
import jumpImageUrl from '../images/jump-up-image.png';

const JumpGameItem = () => {
    const jumpUrl: string = "https://wendell-leao.itch.io/jump-up-2";
    const jumpVideoUrl: string = "videos/jump-up-2.mp4";
    
    return (
        <GameItem id="jump" title="Jump Up 2" synopses="jumpSynopsis" description="jumpDescription" store="itch"
                  side="left" url={jumpUrl} videoUrl={jumpVideoUrl} imageUrl={jumpImageUrl} />
    )
}

export default JumpGameItem;