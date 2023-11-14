import * as React from 'react';
import nosotros from "../images/nosotros.png"
import servicios from "../images/chocosuiso.png"
import servicios2 from "../images/tnt.png"
import f1 from "../images/elementos1.jpg"
import f2 from "../images/f2.jpg"
import f3 from "../images/f3.jpg"
import f4 from "../images/f4.jpg"
import f5 from "../images/f5.jpg"
import f6 from "../images/galeria6.jpeg"
import { Link as Anchord } from 'react-router-dom';


export default function Products() {
  return (
    <body>
      <section id="inicio" class="inicio">
        <div class="contenido-seccion">
            <div class="info">
            <img className='logo1' src={nosotros} alt=""/>
               
            </div>
            <div class="opciones">
                <div class="opcion">
                    PETRÓLEO
                </div>
                <div class="opcion">
                    INDUSTRIA
                </div>
                <div class="opcion">
                    PESCA
                </div>
                <div class="opcion">
                    CLIMA
                </div>
                <div class="opcion">
                    TURISMO
                </div>
                <div class="opcion">
                    CULTIRA
                </div>
            </div> 
        </div>
    </section>

    
    <section id="nosotros" class="nosotros">
  
        <br /><br /><br />
        <div class="fila">
            <div class="col">
                <img className='logoNosotros' src={nosotros} alt=""/>
            </div>
            <div class="col">
                <div class="contenedor-titulo">
                    
                    <div className="info">
                        <span class="frase">LOS MEJORES MOMENTOS EN</span>
                        <h2>NUESTRA CIUDAD</h2>
                    </div>
                </div>
                <p class="p-especial">COMODORO RIVADAVIA, CORAZÓN PETROLERO DE CHUBUT, FUSIONA INDUSTRIA, PESCA Y BELLEZA PATAGOÓNICA.</p>
                <p>¡Bienvenidos a Comodoro Rivadavia, donde la tradición y la modernidad convergen en un paisaje único! Desde la pujante actividad económica hasta la diversidad cultural y las oportunidades turísticas, esta ciudad costera cautiva con su dinamismo y encanto.</p>
            </div>
        </div>
        <hr/>
        <div class="fila-nosotros">
            <div class="col1">
                <span class="frase">
                    <span class="txtRojo">SENTITE</span> PLENO!
                </span>
                <h2>COMODORO <span class="txtRojo">Y SU ENERGÍA ÚNICA</span></h2>
            </div>
            <div class="col2">
                <button><Anchord id="wpp2" to="/#">¡Descubre su energía única!</Anchord></button>
            </div>
        </div>
        
    </section>
   
    <section class="servicios" id="servicios">
        <div class="contenido-seccion">
            <div class="fila">
            <div class="col">
                <div class="contenedor-titulo">
                    <div class="numero">
                    </div>
                    <div class="info">
                    <span class="frase">ENCONTRÁ</span>
                    <h2>EL MEJOR TURISMO</h2>
                    </div>
                </div>
                    <p class="p-especial">Descubre la magia de Comodoro Rivadavia, un destino donde la energía de la industria petrolera se mezcla con la tranquilidad del océano. Este rincón en Chubut ofrece una experiencia turística única, donde la historia se entrelaza con la belleza natural. </p>
                    <p>Desde explorar yacimientos petrolíferos hasta relajarse en sus playas, Comodoro Rivadavia te invita a sumergirte en una aventura llena de contrastes.</p>
                </div>
                <div class="col">
                    <img className='logoTURISMO' src={servicios2} alt=""/>
                </div>
            </div>
        </div>
        <div class="info-servicios">
            <table>
                <tr>
                    <td>
                        
                        <h3><span class="txtRojo">Tour </span> Petróleo</h3>
                        <p>Adéntrate en el corazón de la industria petrolera con un emocionante tour que te lleva a los yacimientos para conocer de cerca el proceso de extracción.</p>
                    </td>
                    <td>
                        
                        <h3><span class="txtRojo">Pesca </span> Deportiva</h3>
                        <p>Disfruta de la rica vida marina participando en una emocionante jornada de pesca deportiva en las aguas del Atlántico.</p>
                    </td>
                    <td>
                        
                        <h3><span class="txtRojo">Paseo </span> por la costa</h3>
                        <p>Recorre la hermosa costanera de la ciudad, con vistas panorámicas del océano, perfecta para relajarse, hacer ejercicio o disfrutar de un atardecer inolvidable.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                       
                        <h3><span class="txtRojo">Museo </span> nacional</h3>
                        <p>Sumérgete en la historia petrolera de la región explorando este museo, que exhibe la evolución de la industria y su impacto en el desarrollo de Comodoro Rivadavia.</p>
                    </td>
                    <td>
                       
                        <h3><span class="txtRojo">Reserva </span> natural</h3>
                        <p>Descubre la diversidad de la fauna y flora patagónica en esta reserva natural, donde puedes realizar caminatas, observar aves y maravillarte con el entorno natural.</p>
                    </td>
                    <td>
                        
                        <h3><span class="txtRojo">Playas </span> kilómetro 3</h3>
                        <p>Relájate en las playas de Kilómetro 3, ideales para disfrutar del sol, las olas y practicar deportes acuáticos. Un refugio costero para escapar y disfrutar de la serenidad del Atlántico.</p>
                    </td>
                </tr>
                <tr className='productosTabla'>
                    <div class="col2">
                        <button><Anchord className="wpp4" to="/productos">QUIERO SABER MÁS!</Anchord></button>
                    </div>
                </tr>
            
            </table>
            
            
        </div>
        
    </section>

    
    <section id="comodidades" class="comodidades">
        
        <div class="fila">
            
            <div class="col">
                <img className='logoMeta' src={servicios} alt=""/>
            </div>
            <div class="col">
                <div class="contenedor-titulo">
                    <div class="numero">
                        
                    </div>
                    <div class="info">
                        <span class="frase">ENCONTRÁ LA COMIDA</span>
                        <h2 className='meta'>QUE MÁS TE GUSTE</h2>
                    </div>
                </div>
                <p class="p-especial">La gastronomía de Comodoro Rivadavia refleja la influencia de su ubicación costera y la riqueza de los productos marinos, así como la diversidad cultural de la región.</p>
                <ul>
                    <li><span>Frutos del Mar:</span> - Dada su proximidad al océano Atlántico, Comodoro Rivadavia es conocido por ofrecer una variedad de pescados y mariscos frescos. Platillos como la centolla, el abadejo, la merluza y los langostinos son populares y destacan por su sabor auténtico.</li>
                    <li><span>Cordero Patagónico:</span> - La región de la Patagonia es famosa por la calidad de su carne de cordero. En Comodoro Rivadavia, es posible disfrutar de platos de cordero patagónico preparados de diversas formas, como asados o guisos.</li>
                    <li><span>Cocina Regional:</span> - La gastronomía local también incorpora influencias de la cocina patagónica en general. Esto incluye platos tradicionales como el asado, las empanadas y las exquisiteces locales que resaltan los sabores auténticos de la región.</li>
                </ul>
            </div>
        </div>
    </section>

    
    <section class="galeria" id="galeria">
        <div class="contenido-seccion">
            <div class="contenedor-titulo">
                <div class="numero">
                </div>
                <div class="info">
                    <span class="frase" id='galeria1'>MIRÁ NUESTRO PAISAJE</span>
                    <h2 className='galeria1'>GALERIA</h2>
                </div>
            </div>
            <div class="fila">
                <div class="col">
                    <img className='imgGaleria' src={f1} alt=""/>
                </div>
                <div class="col">
                    <img className='imgGaleria' src={f2} alt=""/>
                </div>
                <div class="col">
                    <img className='imgGaleria' src={f3} alt=""/>
                </div>
            </div>
            <div class="fila">
                <div class="col">
                    <img className='imgGaleria' src={f4} alt=""/>
                </div>
                <div class="col">
                    <img className='imgGaleria' src={f5} alt=""/>
                </div>
                <div class="col">
                    <img className='imgGaleria' src={f6} alt=""/>
                </div>
            </div>
        </div>
    </section>
    <section class="equipo" id="equipo">
      <div className='mapa'>
      <h2>UBICANOS <span class="txtRojo">EN EL MAPA!</span></h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88950.69384010443!2d-67.58383591208471!3d-45.83710426335043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde4544de04824f5%3A0x5d9f7f8e3bb8ee4b!2sComodoro%20Rivadavia%2C%20Chubut!5e0!3m2!1ses!2sar!4v1699986001122!5m2!1ses!2sar" width="600" height="450" ></iframe>
      </div>
    </section>
   

    <footer>
        <div class="info">
            <p>2023 - <span class="txtRojo">COMODORO RIVADAVIA</span> Todos los derechos reservados</p>
            <div class="redes">
                <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            </div>
        </div>
    </footer>

    </body>
  );
}
