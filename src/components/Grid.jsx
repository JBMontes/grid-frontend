
import Priority1 from "./PriorityOne";
import Priority2 from "./PriorityTwo";
import Priority3 from "./PriorityThree";
import Priority4 from "./PriortyFour";

export default function Grid() {


    return (

        <div className="grid">
            <div className="DoNow">
                <div className="ImportantNow">
                    <h1>Important Do Now</h1>
                    <Priority4 />
                </div>
                <div className="NowLater">
                    <h1> Not Important Do Now</h1>
                    <Priority3 />
                </div>

            </div>
            <div className="DoLater">
                <h1> Important Later</h1>
                <div className="LaterImportant">
                    <Priority2 />
                </div>
                <div className="Later">
                    <h1>Not Important Do Later</h1>
                    <Priority1 />
                </div>

            </div>

        </div>
    )

}