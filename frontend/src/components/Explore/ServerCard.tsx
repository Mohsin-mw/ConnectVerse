import cardBackground from "../../assets/ServerCardBackground.png";
import serverIcon from "../../assets/ServerCardIcon.png"; 
import verified from "../../assets/verified.png"; 

/**
 * This is a a component for the /dashboard/explore page
 * is is the ind
 * @returns 
 */

const ServerCard = () => (
        <div className="w-80 h-96 bg-dark-charcoal">
            <img src={cardBackground} alt="" /> 
            <img className="w-10 relative bottom-7" style={{ left: '19px' }} src={serverIcon} alt=""/>

            <div className="flex h-48 flex-col justify-between relative bottom-3">
                <div className="px-4">
                    <h4 className="flex gap-2 text-xl text-white">
                        <img className="h-5 w-5 relative top-1" src={verified} alt=""/>
                        Apple
                    </h4>
                    <p className="text-base my-4 leading-relaxed    " style={{ color: '#B9BBBE'}}>The official Apple server. Your place to talk about latest tech!</p>
                </div>
    
                <div className="flex justify-around px-4 mb-2">
                    <p className="flex items-center gap-1 text-sm" style={{ color: '#B9BBBE'}}>
                        <span className="w-2 h-2 rounded-full inline-block bg-green"></span> 
                        323,450 Online
                    </p>

                    <p className="flex items-center gap-1 text-sm" style={{ color: '#B9BBBE'}}>
                        <span className="w-2 h-2 rounded-full inline-block bg-grey" ></span> 
                        800,000 Members
                    </p>
                </div>
            </div> 

        </div>
);

export default ServerCard; 