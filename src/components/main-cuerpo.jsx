import "./../CSS/main.css"
import logo from "./../img/logo.webp"
import discord from "./../img/discord.webp"
import tiktok from "./../img/tiktok.webp"
import instagram from "./../img/Instagram.webp"
import facebook from "./../img/Facebook.webp"
import forms from "./../img/Forms.webp"


export function Main() {
    return (
        <main className="container">
            <div className="profile-pic">
                <img alt="logo de Chisme industries" src={logo} />
            </div>
                <h1>Chisme industries</h1>
                <p className="intro">
                    Bienvenido a Chisme Industries Únete a nuestra comunidad de videojuegos, donde la diversión y la competencia se fusionan. Crear torneosemocionantes. Recuerda: Hay que saber perder para poder ganar Diversión garantizada en Chisme Industries
                </p>
            <div className="links">
                <h2>Redes Sociales</h2>
                <div className="links_caja">
                    <div className="links_item">
                        <a href="https://discord.gg/5CKW7vXpmv" target="_blank">
                            <div className="icon">
                                <img alt="discord" src={discord} />
                            </div>
                            <p>servidor de discord</p>
                        </a>
                    </div>
                    <div className="links_item">
                        <a href="https://www.tiktok.com/@game._.crafters" target="_blank">
                            <div className="icon">
                                <img alt="tiktok" src={tiktok} />
                            </div>
                            <p>tik tok</p>
                        </a>
                    </div>
                    <div className="links_item">
                        <a href="https://www.instagram.com/Game._.Crafters/" target="_blank">
                            <div className="icon">
                                <img alt="instagram" src={instagram} />
                            </div>
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className="links_item">
                        <a href="https://www.facebook.com/profile.php?id=61556831765741&mibextid=ZbWKwL" target="_blank">
                            <div className="icon">
                                <img alt="Facebook" src={facebook} />
                            </div>
                        <p>Facebook</p>
                        </a>
                    </div>
                    </div>
                        <h2>Inscripción a Torneos</h2>
                <div className="links_caja">
                    <div className="links_item">
                        <a href="https://forms.gle/bceykuQr7tL3cXZc6" target="_blank">
                            <div className="icon">
                                <img alt="Formulario" src={forms} />
                            </div>
                        <p>Torneo Modo Deathmatch</p>
                        </a>
                    </div>
                    <div className="links_item">
                        <a href="https://forms.gle/DB86CZRHPjQ9pYjP8" target="_blank">
                            <div className="icon">
                                <img alt="Formulario" src={forms} />
                            </div>
                            <p>Torneo Modo normal</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
