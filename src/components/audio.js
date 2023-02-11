
import imgPlay from "./img/play.png";
//import imgPause from "./img/pause.png"

export default function Audio(props) {

   // const [player, setPlayer] = useState("");

    function play(){
        var player = document.getElementById("player")
        player.play();
        player.volume = 0.5;
        //document.getElementsByTagName("img").src = {imgpause};
    }

    return (
    <>
        <section style={{marginLeft: '15px', marginBottom: '50px'}}>
            <button onClick={play}>
                <img src={imgPlay} alt="music player"/>
            </button>
            <p>I love this song</p>
            <audio id="player">
                <source src={props.music} type="audio/ogg" />
                <source src={props.music} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </section>
    </>
    )
}