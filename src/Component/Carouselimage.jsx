import CS from '../Assets/CS.jpg'
import './Carouselimage.css';

export default function CarouselImage() {
    return (
        <>
            {/* <img id="img" src={CS} />  */}
            {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider10.jpg" className="d-block w-100" style={{height:'470px',marginTop:'50px'}} ></img>
                <div className="carousel-caption">
                
                <h3 className="h3">WE WILL HELP TO CREATE YOUR WEALTH</h3>
               </div>
              </div>
              <div class="carousel-item">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider20.jpg" className="d-block w-100"  style={{height:'470px',marginTop:'50px'}} ></img>
                <div className="carousel-caption">
          
                <h3 className="h3">SIMPLE INVESTING PROSPEROUS FUTURE</h3>
        
              </div>
              </div>
              <div class="carousel-item">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider30.jpg" className="d-block w-100"  style={{height:'470px',marginTop:'50px'}} ></img>
                <div className="carousel-caption">
            
                <h3 className="h3">WE MEET YOUR FINANCIAL INVESTMENT NEEDS</h3>
               </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span  aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>


          </div> */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active" >
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider10.jpg" class="d-block w-100" alt="..." style={{ height: '470px' }} />
                        <div class="carousel-caption">
                
                <h3 class="h3">WE WILL HELP TO CREATE YOUR WEALTH</h3>
               </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider20.jpg" class="d-block w-100" alt="..." style={{ height: '470px' }} />
                        <div class="carousel-caption">
            
            <h3 class="h3">WE MEET YOUR FINANCIAL INVESTMENT NEEDS</h3>
           </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider30.jpg" class="d-block w-100" alt="..." style={{ height: '470px' }} />
                        <div class="carousel-caption">
          
          <h3 class="h3">SIMPLE INVESTING PROSPEROUS FUTURE</h3>
  
        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>



    );
}

