import * as React from 'react';
import nosotros from "../images/carlota.png"
import servicios from "../images/carlota/ginetesvg.png"
import servicios2 from "../images/carlota/images-removebg-preview.png"
import f1 from "../images/plazaCarlota.jpg"
import f2 from "../images/carlota/Parroquia-Carlota-1024x953.jpg"
import f3 from "../images/carlota/algarrobo.jpg"
import f4 from "../images/carlota/monumento-en-homenaje-a-los-inmigrantes_la-carlota_cordoba.jpg"
import f5 from "../images/carlota/fuerte 1.jpg"
import f6 from "../images/carlota/fiesta.jpg"
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
                    HISTORIA
                </div>
                <div class="opcion">
                    AGROINDUSTRIA
                </div>
                <div class="opcion">
                    GANADERIA
                </div>
                <div class="opcion">
                    CULTURA
                </div>
                <div class="opcion">
                    TRADICIÓN
                </div>
                <div class="opcion">
                    PROGRESO
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
                <p class="p-especial">LA CARLOTA, HISTORIA Y PROGRESO EN EL CORAZON DE CÓRDOBA</p>
                <p>¡Bienvenidos a La Carlota, donde la tradición y la innovación se encuentran en un entorno único! Desde su rico legado histórico como fortaleza colonial hasta su rol clave en la agroindustria moderna, esta ciudad del sur cordobés combina desarrollo económico, cultura vibrante y paisajes cautivadores.</p>
            </div>
        </div>
        <hr/>
        <div class="fila-nosotros">
            <div class="col1">
                <span class="frase">
                    <span class="txtRojo">SENTITE</span> PLENO!
                </span>
                <h2>LA CARLOTA <span class="txtRojo">Y SU ENERGÍA ÚNICA</span></h2>
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
                    <p class="p-especial">Descubre el encanto de La Carlota, un destino donde la historia y la naturaleza se combinan en perfecta armonía. Esta ciudad cordobesa ofrece una experiencia única, con un legado cultural que se mezcla con paisajes rurales cautivadores.</p>
                    <p>Desde recorrer su histórico casco urbano hasta disfrutar de la serenidad de sus alrededores, La Carlota te invita a vivir una experiencia inolvidable en el corazón del sur cordobés.</p>
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
                    <h3><span class="txtRojo">Recorrido </span> Histórico</h3>
                    <p>Recorre su centro histórico, con lugares emblemáticos como la Plaza San Martín y la Iglesia Nuestra Señora de la Merced.</p>
                </td>
                <td>
                    <h3><span class="txtRojo">Ruta </span> Agroindustrial</h3>
                    <p>Explora la riqueza agrícola de la región con visitas guiadas a campos y plantas productoras, donde podrás conocer el proceso de producción de granos y ganadería local.</p>
                </td>
                <td>
                    <h3><span class="txtRojo">Caminatas </span> Rurales</h3>
                    <p>Disfruta de la tranquilidad del campo cordobés con senderos rurales que te permiten conectarte con la naturaleza y descubrir la belleza del paisaje.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h3><span class="txtRojo">Museo </span> Histórico</h3>
                    <p>Conocé la rica historia de La Carlota visitando el Museo Histórico Municipal, que exhibe objetos y relatos que narran el legado cultural de la ciudad.</p>
                </td>
                <td>
                    <h3><span class="txtRojo">Reserva </span> Natural</h3>
                    <p>Visitá la reserva cercana al río Chocancharava, ideal para observar aves y disfrutar de un día al aire libre rodeado de naturaleza.</p>
                </td>
                <td>
                    <h3><span class="txtRojo">Fiestas </span> Tradicionales</h3>
                    <p>Participa en festividades locales como la Fiesta de la Tradición, donde la música, el baile y las comidas típicas celebran la cultura cordobesa.</p>
                </td>
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
                        <span class="frase">DESCUBRÍ LA TRADICIÓN</span>
                        <h2 className='meta'>QUE DEFINE A LA CARLOTA</h2>
                    </div>
                </div>
                <p class="p-especial">La Carlota es un lugar donde la historia y las tradiciones se mantienen vivas, ofreciendo experiencias únicas que reflejan su esencia cultural y su conexión con la naturaleza.</p>
                <ul>
                    <li><span>Legado Histórico:</span> - Desde su fundación como fortaleza colonial, La Carlota conserva monumentos y espacios históricos que narran su evolución a lo largo de los años.</li>
                    <li><span>Fiestas Populares:</span> - La ciudad celebra eventos tradicionales como la Fiesta de la Tradición, con música, danzas folclóricas y comidas típicas que resaltan la cultura local.</li>
                    <li><span>Conexión con la Naturaleza:</span> - Disfrutá de caminatas rurales y recorridos por el río Chocancharava, donde la tranquilidad del paisaje invita a desconectar y relajarse.</li>
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26640.265309713246!2d-63.31353995234454!3d-33.42237972873609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cee60bd96b89d9%3A0xd48416837d3ae5cd!2sLa%20Carlota%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1731721414032!5m2!1ses-419!2sar" width="600" height="450"></iframe>
      </div>
    </section>
   

    <footer>
        <div class="info">
            <p>2024 - FLORENCIA SALVO - <span class="txtRojo">LA CARLOTA</span> Todos los derechos reservados</p>
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
