import React from "react";
/*import { Form, Link } from "react-router-dom";*/

export default function Home() {
   
  function App() {

    function handleRegister (e) {
      e.preventDefault();
      /*Este boton tiene que recolectarme los datos */
      console.log("hice click en registrar");

    
    }



  }

  return (

       <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvL6Ti7xq3Ta1OisRCPqSLB3t4x8fdQyZx78vuAhkNgHxtoXXHZ9X-8QaVPiDtLL92n34&usqp=CAU" width="600px" CentimageWidth="0px" height="150px" />
      
      <div className="main-container">
        <form className="form-container" action="">

          {/*mailk */}
            <section>
            <span>Email</span>
             <input type="email" />
            </section> 

              {/*contraseña*/}
              
             <section>
              <span>contraseña</span>
              <input type="Password"/> 
              </section>

              {/*boton enviar*/}

              <section>
                <button onClick={e=> handleRegister(e)}>registrar</button>
              </section>
                              
              </form>                                    
                   </div>

   
    </div>
  );
}
