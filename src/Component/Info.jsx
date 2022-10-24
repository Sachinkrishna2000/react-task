import './Info.css';
import main from '../Assets/main1.jpg';
import c from '../Assets/carouselsmall.jpg'

const Info = () => {
    return ( 
<>
        <img style={{height:"390px",width:"1280px"}} src={main} />
        <img style={{height:"100px",width:"1265px"}} src={c}/>
        </>
        
     );
}
 
export default Info;